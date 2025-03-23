const ShipperService = require('../../services/master/ShipperService');

class ShipperController {
  static async getAll(req, res) {
    try {
      const shippers = await ShipperService.getAllShippers();
      res.status(200).json(shippers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const shipper = await ShipperService.getShipperById(req.params.id);
      if (!shipper) {
        return res.status(404).json({ message: 'Shipper not found' });
      }
      res.status(200).json(shipper);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      await ShipperService.createShipper(req.body);
      res.status(201).json({ message: 'Shipper created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      await ShipperService.updateShipper(req.params.id, req.body);
      res.status(200).json({ message: 'Shipper updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await ShipperService.deleteShipper(req.params.id);
      res.status(200).json({ message: 'Shipper deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = ShipperController;