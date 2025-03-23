const Supplier = require('../../Repository/SupplierRepository');

class SupplierService {
  static async getAllSuppliers() {
    return await Supplier.getAll();
  }

  static async getSupplierById(id) {
    return await Supplier.getById(id);
  }

  static async createSupplier(supplier) {
    await Supplier.create(supplier);
  }

  static async updateSupplier(id, supplier) {
    await Supplier.update(id, supplier);
  }

  static async deleteSupplier(id) {
    await Supplier.delete(id);
  }
}

module.exports = SupplierService;