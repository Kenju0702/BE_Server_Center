const SupplierService = require('../../services/master/SupplierService');

class SupplierController {
  static async getAll(req, res) {
    try {
      const suppliers = await SupplierService.getAllSuppliers();
      res.status(200).json(suppliers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const supplier = await SupplierService.getSupplierById(req.params.id);
      if (!supplier) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      res.status(200).json(supplier);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      await SupplierService.createSupplier(req.body);
      res.status(201).json({ message: 'Supplier created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      await SupplierService.updateSupplier(req.params.id, req.body);
      res.status(200).json({ message: 'Supplier updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await SupplierService.deleteSupplier(req.params.id);
      res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = SupplierController;