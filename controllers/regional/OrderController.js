const OrderService = require('../../services/regional/OrderService');

class OrderController {
  // Tạo đơn hàng mới
  static async create(req, res) {
    try {
      const region = req.query.region || 'north';
      await OrderService.createOrder(req.body, region);
      res.status(201).json({ message: 'Order created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Lấy thông tin đơn hàng theo ID
  static async getById(req, res) {
    try {
      const region = req.query.region || 'north';
      const order = await OrderService.getOrderById(req.params.id, region);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Lấy tất cả đơn hàng
  static async getAll(req, res) {
    try {
      const region = req.query.region || 'north';
      const limit = parseInt(req.query.limit) || 10;
      const offset = parseInt(req.query.offset) || 0;
      const orders = await OrderService.getAllOrders(limit, offset, region);
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Cập nhật trạng thái đơn hàng
  static async update(req, res) {
    try {
      const region = req.query.region || 'north';
      await OrderService.updateOrderStatus(req.params.id, req.body, region);
      res.status(200).json({ message: 'Order updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Xóa đơn hàng
  static async delete(req, res) {
    try {
      const region = req.query.region || 'north';
      await OrderService.deleteOrder(req.params.id, region);
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Lấy lịch sử đơn hàng
  static async getOrderHistory(req, res) {
    try {
      const region = req.query.region || 'north';
      const history = await OrderService.getOrderHistory(req.user.id, region);
      res.status(200).json(history);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = OrderController;