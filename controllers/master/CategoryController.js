const CategoryService = require('../../services/master/CategoryService');

class CategoryController {
  static async getAll(req, res) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const category = await CategoryService.getCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      await CategoryService.createCategory(req.body);
      res.status(201).json({ message: 'Category created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      await CategoryService.updateCategory(req.params.id, req.body);
      res.status(200).json({ message: 'Category updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await CategoryService.deleteCategory(req.params.id);
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = CategoryController;