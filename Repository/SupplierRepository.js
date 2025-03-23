const sql = require('mssql/msnodesqlv8');
const { masterConfig } = require('../config/database');

class Supplier {
  // Lấy tất cả các bản ghi NhaCungCap
  static async getAll() {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input("DatabaseName", sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .execute("dbo.GetAllNhaCungCap");
      await pool.close();
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }

  // Lấy một NhaCungCap theo MaNCC
  static async getById(id) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input("DatabaseName", sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input("MaNCC", sql.Int, id)
        .execute("dbo.GetbyIdNhaCungCap");
      await pool.close();
      return result.recordset[0];
    } catch (err) {
      throw err;
    }
  }

  // Tạo mới NhaCungCap (CREATE)
  static async create(supplier) {
    try {
      const pool = await sql.connect(masterConfig);
      const { TenCongTy, DiaChi, ThanhPho, Mien, MaBuuChinh, QuocGia, SoDienThoai, Fax } = supplier;
      await pool.request()
        .input("DatabaseName", sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input("TenCongTy", sql.NVarChar(250), TenCongTy)
        .input("DiaChi", sql.NVarChar(250), DiaChi)
        .input("ThanhPho", sql.NVarChar(100), ThanhPho)
        .input("Mien", sql.NVarChar(100), Mien)
        .input("MaBuuChinh", sql.NVarChar(10), MaBuuChinh)
        .input("QuocGia", sql.NVarChar(15), QuocGia)
        .input("SoDienThoai", sql.NVarChar(24), SoDienThoai)
        .input("Fax", sql.NVarChar(24), Fax)
        .execute("dbo.CreateNhaCungCap");
      await pool.close();
    } catch (err) {
      throw err;
    }
  }

  // Cập nhật NhaCungCap (UPDATE)
  static async update(id, supplier) {
    try {
      const pool = await sql.connect(masterConfig);
      const { TenCongTy, DiaChi, ThanhPho, Mien, MaBuuChinh, QuocGia, SoDienThoai, Fax } = supplier;
      await pool.request()
        .input("DatabaseName", sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input("MaNCC", sql.Int, id)
        .input("TenCongTy", sql.NVarChar(250), TenCongTy)
        .input("DiaChi", sql.NVarChar(250), DiaChi)
        .input("ThanhPho", sql.NVarChar(100), ThanhPho)
        .input("Mien", sql.NVarChar(100), Mien)
        .input("MaBuuChinh", sql.NVarChar(10), MaBuuChinh)
        .input("QuocGia", sql.NVarChar(15), QuocGia)
        .input("SoDienThoai", sql.NVarChar(24), SoDienThoai)
        .input("Fax", sql.NVarChar(24), Fax)
        .execute("dbo.UpdateNhaCungCap");
      await pool.close();
    } catch (err) {
      throw err;
    }
  }

  // Xóa NhaCungCap (DELETE)
  static async delete(id) {
    try {
      const pool = await sql.connect(masterConfig);
      await pool.request()
        .input("DatabaseName", sql.NVarChar(128), masterConfig.defaultDatabase)
        .input("MaNCC", sql.Int, id)
        .execute("dbo.DeleteNhaCungCap");
      await pool.close();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Supplier;
