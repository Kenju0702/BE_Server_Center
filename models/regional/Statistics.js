// models/regional/Statistics.js
const sql = require('mssql');
const { regionalConfigs } = require('../../config/database');

class Statistics {
  static async getSalesData(region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request().query('SELECT * FROM SalesData');
      return result.recordset;
    } catch (err) {
      console.error('Error in getSalesData:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async getCustomerData(region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request().query('SELECT * FROM CustomerData');
      return result.recordset;
    } catch (err) {
      console.error('Error in getCustomerData:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }

  static async getProductData(region = 'north') {
    let pool;
    try {
      console.log('Model - Region:', region);
      await sql.close();
      pool = await sql.connect(regionalConfigs[region]);
      const result = await pool.request().query('SELECT * FROM ProductData');
      return result.recordset;
    } catch (err) {
      console.error('Error in getProductData:', err);
      throw err;
    } finally {
      if (pool) {
        await pool.close();
      }
    }
  }
}

module.exports = Statistics;