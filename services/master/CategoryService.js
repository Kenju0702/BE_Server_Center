const CategoryRepository = require("../../Repository/CategoryRepository");

class CategoryService {
  static async getAllCategories() {
    return await CategoryRepository.getAll();
  }

  static async getCategoryById(id) {
    return await CategoryRepository.getById(id);
  }

  static async createCategory(category) {
    await CategoryRepository.create(category);
  }

  static async updateCategory(id, category) {
    await CategoryRepository.update(id, category);
  }

  static async deleteCategory(id) {
    await CategoryRepository.delete(id);
  }
}

module.exports = CategoryService;
