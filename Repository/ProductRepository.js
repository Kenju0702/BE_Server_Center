// Product.js
const sql = require('mssql/msnodesqlv8');
const { masterConfig } = require('../config/database');

class Product {
  // Lấy tất cả sản phẩm
  static async getAll() {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('DatabaseName', sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .execute('dbo.GetAllSanPham');
      await pool.close();
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }

  // Lấy sản phẩm theo MaSP
  static async getById(id) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('DatabaseName', sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input('MaSP', sql.Int, id)
        .execute('dbo.GetbyIdSanPham');
      await pool.close();
      return result.recordset[0];
    } catch (err) {
      throw err;
    }
  }

  // Tạo mới sản phẩm
  static async create(product) {
    try {
      const pool = await sql.connect(masterConfig);
      const { TenSP, MaNCC, MaLoaiSP, ThanhTien, SoLuongTonKho, SoLuongDatMua, MucDatHangLai, TrangThaiNgungBan } = product;
      await pool.request()
        .input('DatabaseName', sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input('TenSP', sql.NVarChar(250), TenSP)
        .input('MaNCC', sql.Int, MaNCC)
        .input('MaLoaiSP', sql.Int, MaLoaiSP)
        .input('ThanhTien', sql.Money, ThanhTien)
        .input('SoLuongTonKho', sql.SmallInt, SoLuongTonKho)
        .input('SoLuongDatMua', sql.SmallInt, SoLuongDatMua)
        .input('MucDatHangLai', sql.SmallInt, MucDatHangLai)
        .input('TrangThaiNgungBan', sql.Bit, TrangThaiNgungBan)
        .execute('dbo.CreateSanPham');
      await pool.close();
    } catch (err) {
      throw err;
    }
  }

  // Cập nhật sản phẩm
  static async update(id, product) {
    try {
      const pool = await sql.connect(masterConfig);
      const { TenSP, MaNCC, MaLoaiSP, ThanhTien, SoLuongTonKho, SoLuongDatMua, MucDatHangLai, TrangThaiNgungBan } = product;
      await pool.request()
        .input('DatabaseName', sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input('MaSP', sql.Int, id)
        .input('TenSP', sql.NVarChar(250), TenSP)
        .input('MaNCC', sql.Int, MaNCC)
        .input('MaLoaiSP', sql.Int, MaLoaiSP)
        .input('ThanhTien', sql.Money, ThanhTien)
        .input('SoLuongTonKho', sql.SmallInt, SoLuongTonKho)
        .input('SoLuongDatMua', sql.SmallInt, SoLuongDatMua)
        .input('MucDatHangLai', sql.SmallInt, MucDatHangLai)
        .input('TrangThaiNgungBan', sql.Bit, TrangThaiNgungBan)
        .execute('dbo.UpdateSanPham');
      await pool.close();
    } catch (err) {
      throw err;
    }
  }

  // Xóa sản phẩm
  static async delete(id) {
    try {
      const pool = await sql.connect(masterConfig);
      await pool.request()
        .input('DatabaseName', sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input('MaSP', sql.Int, id)
        .execute('dbo.DeleteSanPham');
      await pool.close();
    } catch (err) {
      throw err;
    }
  }

  // Tìm kiếm sản phẩm theo TenSP
  static async search(keyword) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('DatabaseName', sql.NVarChar(128), masterConfig.defaultDatabaseName)
        .input('keyword', sql.NVarChar(250), `%${keyword}%`)
        .execute('dbo.SearchSanPham');
      await pool.close();
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Product;
