const sql = require('mssql');
const { masterConfig } = require('../config/database');

class Shipper {
  static async getAll() {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request().query('SELECT * FROM TrungTam.dbo.NhaVanChuyen');
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }

  static async getById(id) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('MaNVC', sql.Int, id)
        .query('SELECT * FROM TrungTam.dbo.NhaVanChuyen WHERE MaNVC = @MaNVC');
      return result.recordset[0];
    } catch (err) {
      throw err;
    }
  }

  static async create(shipper) {
    try {
      const pool = await sql.connect(masterConfig);
      const { MaNVC, TenCongTy, SoDienThoai } = shipper;
      await pool.request()
        .input('MaNVC', sql.Int, MaNVC)
        .input('TenCongTy', sql.NVarChar(250), TenCongTy)
        .input('SoDienThoai', sql.NVarChar(10), SoDienThoai)
        .query('INSERT INTO TrungTam.dbo.NhaVanChuyen (MaNVC, TenCongTy, SoDienThoai) VALUES (@MaNVC, @TenCongTy, @SoDienThoai)');
    } catch (err) {
      throw err;
    }
  }

  static async update(id, shipper) {
    try {
      const pool = await sql.connect(masterConfig);
      const { TenCongTy, SoDienThoai } = shipper;
      await pool.request()
        .input('MaNVC', sql.Int, id)
        .input('TenCongTy', sql.NVarChar(250), TenCongTy)
        .input('SoDienThoai', sql.NVarChar(10), SoDienThoai)
        .query('UPDATE TrungTam.dbo.NhaVanChuyen SET TenCongTy = @TenCongTy, SoDienThoai = @SoDienThoai WHERE MaNVC = @MaNVC');
    } catch (err) {
      throw err;
    }
  }

  static async delete(id) {
    try {
      const pool = await sql.connect(masterConfig);
      await pool.request()
        .input('MaNVC', sql.Int, id)
        .query('DELETE FROM TrungTam.dbo.NhaVanChuyen WHERE MaNVC = @MaNVC');
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Shipper;