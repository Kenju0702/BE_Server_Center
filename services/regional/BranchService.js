const Branch = require('../../models/regional/Branch');

class BranchService {
  static async getAllBranches(region = 'north') {
    return await Branch.getAll(region);
  }

  static async getBranchById(id, region = 'north') {
    return await Branch.getById(id, region);
  }

  static async createBranch(branch, region = 'north') {
    await Branch.create(branch, region);
  }

  static async updateBranch(id, branch, region = 'north') {
    await Branch.update(id, branch, region);
  }

  static async deleteBranch(id, region = 'north') {
    await Branch.delete(id, region);
  }
}

module.exports = BranchService;