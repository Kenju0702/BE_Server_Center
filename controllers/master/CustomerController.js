const CustomerService = require('../../services/master/CustomerService');

class CustomerController {
  static async getAll(req, res) {
    try {
      const customers = await CustomerService.getAllCustomers();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const customer = await CustomerService.getCustomerById(req.params.id);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      await CustomerService.createCustomer(req.body);
      res.status(201).json({ message: 'Customer created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      await CustomerService.updateCustomer(req.params.id, req.body);
      res.status(200).json({ message: 'Customer updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await CustomerService.deleteCustomer(req.params.id);
      res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async search(req, res) {
    try {
      const customers = await CustomerService.searchCustomers(req.query.q);
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = CustomerController;