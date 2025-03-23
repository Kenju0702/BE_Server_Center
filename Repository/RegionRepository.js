const sql = require('mssql');
const { masterConfig } = require('../config/database');

// Model Region - CRUD operations
class Region {
  static async createRegion(regionData) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('TenVung', sql.NVarChar, regionData.TenVung)
        .query('INSERT INTO TrungTam.dbo.VungMien (TenVung) VALUES (@TenVung)');
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getAllRegions() {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request().query('SELECT * FROM TrungTam.dbo.VungMien');
      return result.recordset;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getRegionById(regionId) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('MaVung', sql.Int, regionId)
        .query('SELECT * FROM TrungTam.dbo.VungMien WHERE MaVung = @MaVung');
      return result.recordset[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  static async updateRegion(regionId, regionData) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('MaVung', sql.Int, regionId)
        .input('TenVung', sql.NVarChar, regionData.TenVung)
        .query('UPDATE TrungTam.dbo.VungMien SET TenVung = @TenVung WHERE MaVung = @MaVung');
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async deleteRegion(regionId) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('MaVung', sql.Int, regionId)
        .query('DELETE FROM TrungTam.dbo.VungMien WHERE MaVung = @MaVung');
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async searchRegions(query) {
    try {
      const pool = await sql.connect(masterConfig);
      const result = await pool.request()
        .input('query', sql.NVarChar, `%${query}%`)
        .query('SELECT * FROM TrungTam.dbo.VungMien WHERE TenVung LIKE @query');
      return result.recordset;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = Region;