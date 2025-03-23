const Statistics = require('../../models/regional/Statistics');

class StatisticsService {
  static async getSalesStatistics(region = 'north') {
    return await Statistics.getSalesData(region);
  }

  static async getCustomerStatistics(region = 'north') {
    return await Statistics.getCustomerData(region);
  }

  static async getProductStatistics(region = 'north') {
    return await Statistics.getProductData(region);
  }
}

module.exports = StatisticsService;