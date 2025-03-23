const sql = require("mssql");
const {masterConfig} = require("../config/database");
const Category = require("../models/Category");

class CategoryRepository {
  static async getAll() {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool
        .request()
        .input("DatabaseName", sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .execute("CategoryAtDatabase");

      await pool.close();

      return result.recordset.map(
        (row) => new Category(row.MaLoaiSP, row.TenLoaiSP, row.MoTa)
      );
    } catch (error) {
      console.error("❌ Lỗi trong CategoryRepository.getAll:", error.message);
      throw error;
    }
  }

  static async getById(id) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool
        .request()
        .input("MaLoaiSP", sql.Int, id)
        .input(
          "DatabaseName",
          sql.NVarChar(128),
          masterConfig.defaultDatabaseName
        ) 
        .execute("dbo.GetCategoryById");
        await pool.close();
      return result.recordset[0];
    } catch (err) {
      throw err;
    }
  }

  static async create(category) {
    try {
      const pool = await sql.connect(masterConfig);
      const { TenLoaiSP, MoTa } = category;
      await pool
        .request()
        .input("TenLoaiSP", sql.NVarChar(15), TenLoaiSP)
        .input("MoTa", sql.NVarChar(sql.MAX), MoTa)
        .input("DatabaseName", sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .execute("dbo.CreateLoaiSanPham");
       await pool.close();
    } catch (err) {
      throw err;
    }
  }
  

  static async update(id, category) {
    try {
      const pool = await sql.connect(masterConfig);
      const {TenLoaiSP, MoTa} = category;
      await pool
        .request()
        .input("MaLoaiSP", sql.Int, id)
        .input("TenLoaiSP", sql.NVarChar(15), TenLoaiSP)
        .input("MoTa", sql.NVarChar(sql.MAX), MoTa)
        .input(
          "DatabaseName",
          sql.NVarChar(128),
          masterConfig.defaultDatabaseName
        ) 
        .execute("dbo.UpdateLoaiSanPham");
    } catch (err) {
      throw err;
    }
  }

  static async delete(id) {
    try {
      const pool = await sql.connect(masterConfig);
      await pool
        .request()
        .input("MaLoaiSP", sql.Int, id)
        .input(
          "DatabaseName",
          sql.NVarChar(128),
          masterConfig.defaultDatabaseName
        ) 
        .execute("dbo.DeleteLoaiSanPham");
    } catch (err) {
      throw err;
    }
  }

  static async search(keyword) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool
        .request()
        .input("keyword", sql.NVarChar(15), `%${keyword}%`)
        .query(
          "SELECT * FROM TrungTam.dbo.LoaiSanPham WHERE TenLoaiSP LIKE @keyword"
        );
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CategoryRepository;
