const EmployeeService = require('../../services/regional/EmployeeService');

class EmployeeController {
  static async getAll(req, res) {
    try {
      console.log('Controller - Query params:', req.query);
      const region = req.query.region || 'north';
      console.log('Controller - Selected region:', region);
      const employees = await EmployeeService.getAllEmployees(region);
      res.status(200).json(employees);
    } catch (err) {
      console.error('Controller - Error:', err);
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const region = req.query.region || 'north';
      const employee = await EmployeeService.getEmployeeById(req.params.id, region);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      const region = req.query.region || 'north';
      // Đảm bảo MaCN đúng với region
      const employee = req.body;
      employee.MaCN = region === 'south' ? 2 : 1;
      await EmployeeService.createEmployee(employee, region);
      res.status(201).json({ message: 'Employee created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      const region = req.query.region || 'north';
      // Đảm bảo MaCN đúng với region
      const employee = req.body;
      employee.MaCN = region === 'south' ? 2 : 1;
      await EmployeeService.updateEmployee(req.params.id, employee, region);
      res.status(200).json({ message: 'Employee updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const region = req.query.region || 'north';
      await EmployeeService.deleteEmployee(req.params.id, region);
      res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = EmployeeController;