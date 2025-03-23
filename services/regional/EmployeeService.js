const Employee = require('../../models/regional/Employee');

class EmployeeService {
  static async getAllEmployees(region = 'north') {
    console.log('Service - Region:', region);
    return await Employee.getAll(region);
  }

  static async getEmployeeById(id, region = 'north') {
    console.log('Service - Region:', region);
    return await Employee.getById(id, region);
  }

  static async createEmployee(employee, region = 'north') {
    console.log('Service - Region:', region);
    await Employee.create(employee, region);
  }

  static async updateEmployee(id, employee, region = 'north') {
    console.log('Service - Region:', region);
    await Employee.update(id, employee, region);
  }

  static async deleteEmployee(id, region = 'north') {
    console.log('Service - Region:', region);
    await Employee.delete(id, region);
  }
}

module.exports = EmployeeService;