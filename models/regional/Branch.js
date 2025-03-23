const sql = require('mssql');
const { regionalConfigs } = require('../../config/database');

class Branch {
  static async getAll(region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request().query('SELECT * FROM ChiNhanh');
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
        .input('MaCN', sql.Int, id)
        .query('SELECT * FROM ChiNhanh WHERE MaCN = @MaCN');
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

  static async create(branch, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const { MaCN, TenChiNhanh, DiaChi, ThanhPho, Mien, SoDienThoai } = branch;
      await pool.request()
        .input('MaCN', sql.Int, MaCN)
        .input('TenChiNhanh', sql.NVarChar(250), TenChiNhanh)
        .input('DiaChi', sql.NVarChar(250), DiaChi)
        .input('ThanhPho', sql.NVarChar(100), ThanhPho)
        .input('Mien', sql.NVarChar(100), Mien)
        .input('SoDienThoai', sql.NVarChar(24), SoDienThoai)
        .query('INSERT INTO ChiNhanh (MaCN, TenChiNhanh, DiaChi, ThanhPho, Mien, SoDienThoai) VALUES (@MaCN, @TenChiNhanh, @DiaChi, @ThanhPho, @Mien, @SoDienThoai)');
    } catch (err) {
      console.error('Error in create:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async update(id, branch, region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const { TenChiNhanh, DiaChi, ThanhPho, Mien, SoDienThoai } = branch;
      await pool.request()
        .input('MaCN', sql.Int, id)
        .input('TenChiNhanh', sql.NVarChar(250), TenChiNhanh)
        .input('DiaChi', sql.NVarChar(250), DiaChi)
        .input('ThanhPho', sql.NVarChar(100), ThanhPho)
        .input('Mien', sql.NVarChar(100), Mien)
        .input('SoDienThoai', sql.NVarChar(24), SoDienThoai)
        .query('UPDATE ChiNhanh SET TenChiNhanh = @TenChiNhanh, DiaChi = @DiaChi, ThanhPho = @ThanhPho, Mien = @Mien, SoDienThoai = @SoDienThoai WHERE MaCN = @MaCN');
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
        .input('MaCN', sql.Int, id)
        .query('DELETE FROM ChiNhanh WHERE MaCN = @MaCN');
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

module.exports = Branch;