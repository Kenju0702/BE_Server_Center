const ProductService = require('../../services/master/ProductService');

class ProductController {
  static async getAll(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async create(req, res) {
    try {
      await ProductService.createProduct(req.body);
      res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      await ProductService.updateProduct(req.params.id, req.body);
      res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async search(req, res) {
    try {
      const products = await ProductService.searchProducts(req.query.q);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = ProductController;