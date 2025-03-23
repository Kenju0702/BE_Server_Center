const BranchService = require('../../services/regional/BranchService');

class BranchController {
  static async getAll(req, res) {
    try {
      const region = req.query.region || 'north';
      const branches = await BranchService.getAllBranches(region);
      res.status(200).json(branches);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const region = req.query.region || 'north';
      const branch = await BranchService.getBranchById(req.params.id, region);
      if (!branch) {
        return res.status(404).json({ message: 'Branch not found' });
      }
      res.status(200).json(branch);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      const region = req.query.region || 'north';
      await BranchService.createBranch(req.body, region);
      res.status(201).json({ message: 'Branch created successfully' });
    } catch (err) {
      console.error('Error in create:', err);
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      const region = req.query.region || 'north';
      await BranchService.updateBranch(req.params.id, req.body, region);
      res.status(200).json({ message: 'Branch updated successfully' });
    } catch (err) {
      console.error('Error in update:', err);
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const region = req.query.region || 'north';

      await BranchService.deleteBranch(req.params.id, region);
      res.status(200).json({ message: 'Branch deleted successfully' });
    } catch (err) {
      console.error('Error in delete:', err);
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = BranchController;