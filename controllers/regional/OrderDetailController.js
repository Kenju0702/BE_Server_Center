const OrderDetailService = require('../../services/regional/OrderDetailService');

class OrderDetailController {
  static async getByOrderId(req, res) {
    try {
      const region = req.query.region || 'north';
      const orderDetails = await OrderDetailService.getOrderDetailsByOrderId(req.params.orderId, region);
      res.status(200).json(orderDetails);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      const region = req.query.region || 'north';
      await OrderDetailService.createOrderDetail(req.body, region);
      res.status(201).json({ message: 'Order detail created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      const region = req.query.region || 'north';
      await OrderDetailService.updateOrderDetail(req.params.orderId, req.params.productId, req.body, region);
      res.status(200).json({ message: 'Order detail updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const region = req.query.region || 'north';
      await OrderDetailService.deleteOrderDetail(req.params.orderId, req.params.productId, region);
      res.status(200).json({ message: 'Order detail deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = OrderDetailController;