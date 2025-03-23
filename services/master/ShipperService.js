const Shipper = require('../../Repository/ShipperRepository');

class ShipperService {
  static async getAllShippers() {
    return await Shipper.getAll();
  }

  static async getShipperById(id) {
    return await Shipper.getById(id);
  }

  static async createShipper(shipper) {
    await Shipper.create(shipper);
  }

  static async updateShipper(id, shipper) {
    await Shipper.update(id, shipper);
  }

  static async deleteShipper(id) {
    await Shipper.delete(id);
  }
}

module.exports = ShipperService;