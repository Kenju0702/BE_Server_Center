const sql = require('mssql');
const { masterConfig, regionalConfigs } = require('../config/database');

const getConnection = async (region) => {
  const config = region ? regionalConfigs[region] : masterConfig;
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error('Lỗi kết nối database:', error);
    throw error;
  }
};

module.exports = { getConnection };