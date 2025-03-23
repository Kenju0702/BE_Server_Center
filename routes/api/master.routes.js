const express = require('express');
const router = express.Router();
const CategoryController = require('../../controllers/master/CategoryController');
const CustomerController = require('../../controllers/master/CustomerController');
const ProductController = require('../../controllers/master/ProductController');
const ShipperController = require('../../controllers/master/ShipperController');
const SupplierController = require('../../controllers/master/SupplierController');

// Category routes
router.get('/categories', CategoryController.getAll);
router.get('/categories/:id', CategoryController.getById);
router.post('/categories', CategoryController.create);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

// Customer routes
router.get('/customers', CustomerController.getAll);
router.get('/customers/search', CustomerController.search);
router.get('/customers/:id', CustomerController.getById);
router.post('/customers', CustomerController.create);
router.put('/customers/:id', CustomerController.update);
router.delete('/customers/:id', CustomerController.delete);

// Product routes
router.get('/products', ProductController.getAll);
router.get('/products/search', ProductController.search);
router.get('/products/:id', ProductController.getById);
router.post('/products', ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);


// Shipper routes
router.get('/shippers', ShipperController.getAll);
router.get('/shippers/:id', ShipperController.getById);
router.post('/shippers', ShipperController.create);
router.put('/shippers/:id', ShipperController.update);
router.delete('/shippers/:id', ShipperController.delete);

// Supplier routes
router.get('/suppliers', SupplierController.getAll);
router.get('/suppliers/:id', SupplierController.getById);
router.post('/suppliers', SupplierController.create);
router.put('/suppliers/:id', SupplierController.update);
router.delete('/suppliers/:id', SupplierController.delete);

module.exports = router;