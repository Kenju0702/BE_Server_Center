// routes/index.js
const express = require('express');
const router = express.Router();
const masterRoutes = require('./api/master.routes');
const regionalRoutes = require('./api/regional.routes');

// Use master routes
router.use('/master', masterRoutes);

// Use regional routes
router.use('/regional', regionalRoutes);

module.exports = router;