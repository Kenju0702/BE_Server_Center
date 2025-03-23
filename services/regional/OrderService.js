const Order = require('../../models/regional/Order');

class OrderService {
  // Tạo đơn hàng mới
  static async createOrder(order, region = 'north') {
    await Order.create(order, region);
  }

  // Lấy thông tin đơn hàng theo ID
  static async getOrderById(id, region = 'north') {
    return await Order.getById(id, region);
  }

  // Lấy tất cả đơn hàng
  static async getAllOrders(limit = 10, offset = 0, region = 'north') {
    return await Order.getAll(limit, offset, region);
  }

  // Cập nhật trạng thái đơn hàng
  static async updateOrderStatus(id, orderData, region = 'north') {
    await Order.update(id, orderData, region);
  }

  // Xóa đơn hàng
  static async deleteOrder(id, region = 'north') {
    await Order.delete(id, region);
  }

  // Lấy lịch sử đơn hàng
  static async getOrderHistory(customerId) {
    return await Order.getHistory(customerId); // Bạn cần thêm phương thức này trong Order model
  }
}

module.exports = OrderService;