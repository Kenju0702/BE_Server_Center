const Product = require('../../Repository/ProductRepository');

class ProductService {
  static async getAllProducts() {
    return await Product.getAll();
  }

  static async getProductById(id) {
    return await Product.getById(id);
  }

  static async createProduct(product) {
    await Product.create(product);
  }

  static async updateProduct(id, product) {
    await Product.update(id, product);
  }

  static async deleteProduct(id) {
    await Product.delete(id);
  }

  static async searchProducts(query) {
    return await Product.search(query);
  }
}

module.exports = ProductService;