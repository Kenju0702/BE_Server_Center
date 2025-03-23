const sql = require('mssql');
const { regionalConfigs } = require('../../config/database');

class OrderDetail {
  static async getAll(region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request().query('SELECT * FROM ChiTietDonHang');
      return result.recordset;
    } catch (err) {
      console.error('Error in getAll:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async getById(orderId, productId, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request()
        .input('MaDH', sql.Int, orderId)
        .input('MaSP', sql.Int, productId)
        .query('SELECT * FROM ChiTietDonHang WHERE MaDH = @MaDH AND MaSP = @MaSP');
      return result.recordset[0];
    } catch (err) {
      console.error('Error in getById:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async create(orderDetail, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const { MaDH, MaSP, ThanhTien, SoLuong, GiamGia } = orderDetail;
      await pool.request()
        .input('MaDH', sql.Int, MaDH)
        .input('MaSP', sql.Int, MaSP)
        .input('ThanhTien', sql.Money, ThanhTien)
        .input('SoLuong', sql.SmallInt, SoLuong)
        .input('GiamGia', sql.Real, GiamGia)
        .query('INSERT INTO ChiTietDonHang (MaDH, MaSP, ThanhTien, SoLuong, GiamGia) VALUES (@MaDH, @MaSP, @ThanhTien, @SoLuong, @GiamGia)');
    } catch (err) {
      console.error('Error in create:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async update(orderId, productId, orderDetail, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const { ThanhTien, SoLuong, GiamGia } = orderDetail;
      await pool.request()
        .input('MaDH', sql.Int, orderId)
        .input('MaSP', sql.Int, productId)
        .input('ThanhTien', sql.Money, ThanhTien)
        .input('SoLuong', sql.SmallInt, SoLuong)
        .input('GiamGia', sql.Real, GiamGia)
        .query('UPDATE ChiTietDonHang SET ThanhTien = @ThanhTien, SoLuong = @SoLuong, GiamGia = @GiamGia WHERE MaDH = @MaDH AND MaSP = @MaSP');
    } catch (err) {
      console.error('Error in update:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async delete(orderId, productId, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      await pool.request()
        .input('MaDH', sql.Int, orderId)
        .input('MaSP', sql.Int, productId)
        .query('DELETE FROM ChiTietDonHang WHERE MaDH = @MaDH AND MaSP = @MaSP');
    } catch (err) {
      console.error('Error in delete:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async getByOrderId(orderId, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request()
        .input('MaDH', sql.Int, orderId)
        .query('SELECT * FROM ChiTietDonHang WHERE MaDH = @MaDH');
      return result.recordset;
    } catch (err) {
      console.error('Error in getByOrderId:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }
}

module.exports = OrderDetail;