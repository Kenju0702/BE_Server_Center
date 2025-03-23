const sql = require('mssql');
const { masterConfig } = require('../config/database');

class Customer {
  static async getAll() {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request().query('SELECT * FROM TrungTam.dbo.KhachHang');
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }

  static async getById(id) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('MaKH', sql.NChar(250), id)
        .query('SELECT * FROM TrungTam.dbo.KhachHang WHERE MaKH = @MaKH');
      return result.recordset[0];
    } catch (err) {
      throw err;
    }
  }

  static async create(customer) {
    try {
      const pool = await sql.connect(masterConfig);
      const { MaKH, TenKH, NgaySinh, GioiTinh, DiaChi, ThanhPho, Mien, SoDienThoai } = customer;
      await pool.request()
        .input('MaKH', sql.NChar(250), MaKH)
        .input('TenKH', sql.NVarChar(250), TenKH)
        .input('NgaySinh', sql.DateTime, NgaySinh)
        .input('GioiTinh', sql.NVarChar(50), GioiTinh)
        .input('DiaChi', sql.NVarChar(60), DiaChi)
        .input('ThanhPho', sql.NVarChar(15), ThanhPho)
        .input('Mien', sql.NVarChar(15), Mien)
        .input('SoDienThoai', sql.NVarChar(24), SoDienThoai)
        .query('INSERT INTO TrungTam.dbo.KhachHang (MaKH, TenKH, NgaySinh, GioiTinh, DiaChi, ThanhPho, Mien, SoDienThoai) VALUES (@MaKH, @TenKH, @NgaySinh, @GioiTinh, @DiaChi, @ThanhPho, @Mien, @SoDienThoai)');
    } catch (err) {
      throw err;
    }
  }

  static async update(id, customer) {
    try {
      const pool = await sql.connect(masterConfig);
      const { TenKH, NgaySinh, GioiTinh, DiaChi, ThanhPho, Mien, SoDienThoai } = customer;
      await pool.request()
        .input('MaKH', sql.NChar(250), id)
        .input('TenKH', sql.NVarChar(250), TenKH)
        .input('NgaySinh', sql.DateTime, NgaySinh)
        .input('GioiTinh', sql.NVarChar(50), GioiTinh)
        .input('DiaChi', sql.NVarChar(60), DiaChi)
        .input('ThanhPho', sql.NVarChar(15), ThanhPho)
        .input('Mien', sql.NVarChar(15), Mien)
        .input('SoDienThoai', sql.NVarChar(24), SoDienThoai)
        .query('UPDATE TrungTam.dbo.KhachHang SET TenKH = @TenKH, NgaySinh = @NgaySinh, GioiTinh = @GioiTinh, DiaChi = @DiaChi, ThanhPho = @ThanhPho, Mien = @Mien, SoDienThoai = @SoDienThoai WHERE MaKH = @MaKH');
    } catch (err) {
      throw err;
    }
  }

  static async delete(id) {
    try {
      const pool = await sql.connect(masterConfig);
      await pool.request()
        .input('MaKH', sql.NChar(250), id)
        .query('DELETE FROM TrungTam.dbo.KhachHang WHERE MaKH = @MaKH');
    } catch (err) {
      throw err;
    }
  }

  static async search(keyword) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('keyword', sql.NVarChar(250), `%${keyword}%`)
        .query('SELECT * FROM TrungTam.dbo.KhachHang WHERE TenKH LIKE @keyword');
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Customer;