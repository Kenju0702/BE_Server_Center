const OrderDetail = require('../../models/regional/OrderDetail');

class OrderDetailService {
  static async getOrderDetailsByOrderId(orderId, region = 'north') {
    return await OrderDetail.getByOrderId(orderId, region);
  }

  static async createOrderDetail(orderDetail, region = 'north') {
    await OrderDetail.create(orderDetail, region);
  }

  static async updateOrderDetail(orderId, productId, orderDetail, region = 'north') {
    await OrderDetail.update(orderId, productId, orderDetail, region);
  }

  static async deleteOrderDetail(orderId, productId, region = 'north') {
    await OrderDetail.delete(orderId, productId, region);
  }
}

module.exports = OrderDetailService;