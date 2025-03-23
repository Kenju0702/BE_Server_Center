const sql = require('mssql');
const { regionalConfigs } = require('../../config/database');

class Order {
  static async getAll(limit = 10, offset = 0, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request()
        .query(`SELECT * FROM DonHang ORDER BY MaDH OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`);
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

  static async getById(id, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request()
        .input('MaDH', sql.Int, id)
        .query('SELECT * FROM DonHang WHERE MaDH = @MaDH');
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

  static async create(order, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const { MaDH, MaKH, MaNV, NgayDatHang, MaNVC, TenNguoiNhan, DiaChiNhan, ThanhPhoNhan, MaCN } = order;
      await pool.request()
        .input('MaDH', sql.Int, MaDH)
        .input('MaKH', sql.NChar(250), MaKH)
        .input('MaNV', sql.Int, MaNV)
        .input('NgayDatHang', sql.DateTime, NgayDatHang)
        .input('MaNVC', sql.Int, MaNVC)
        .input('TenNguoiNhan', sql.NVarChar(250), TenNguoiNhan)
        .input('DiaChiNhan', sql.NVarChar(250), DiaChiNhan)
        .input('ThanhPhoNhan', sql.NVarChar(100), ThanhPhoNhan)
        .input('MaCN', sql.Int, MaCN)
        .query('INSERT INTO DonHang (MaDH, MaKH, MaNV, NgayDatHang, MaNVC, TenNguoiNhan, DiaChiNhan, ThanhPhoNhan, MaCN) VALUES (@MaDH, @MaKH, @MaNV, @NgayDatHang, @MaNVC, @TenNguoiNhan, @DiaChiNhan, @ThanhPhoNhan, @MaCN)');
    } catch (err) {
      console.error('Error in create:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async update(id, order, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const { MaKH, MaNV, NgayDatHang, MaNVC, TenNguoiNhan, DiaChiNhan, ThanhPhoNhan, MaCN } = order;
      await pool.request()
        .input('MaDH', sql.Int, id)
        .input('MaKH', sql.NChar(250), MaKH)
        .input('MaNV', sql.Int, MaNV)
        .input('NgayDatHang', sql.DateTime, NgayDatHang)
        .input('MaNVC', sql.Int, MaNVC)
        .input('TenNguoiNhan', sql.NVarChar(250), TenNguoiNhan)
        .input('DiaChiNhan', sql.NVarChar(250), DiaChiNhan)
        .input('ThanhPhoNhan', sql.NVarChar(100), ThanhPhoNhan)
        .input('MaCN', sql.Int, MaCN)
        .query('UPDATE DonHang SET MaKH = @MaKH, MaNV = @MaNV, NgayDatHang = @NgayDatHang, MaNVC = @MaNVC, TenNguoiNhan = @TenNguoiNhan, DiaChiNhan = @DiaChiNhan, ThanhPhoNhan = @ThanhPhoNhan, MaCN = @MaCN WHERE MaDH = @MaDH');
    } catch (err) {
      console.error('Error in update:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async delete(id, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      await pool.request()
        .input('MaDH', sql.Int, id)
        .query('DELETE FROM DonHang WHERE MaDH = @MaDH');
    } catch (err) {
      console.error('Error in delete:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }
}

module.exports = Order;