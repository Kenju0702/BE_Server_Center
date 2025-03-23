const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet()); // Tăng cường bảo mật

// Routes
app.use('/api', routes);
app.get('/', (req, res) => {
    res.send(`Hello from backend running on port ${process.env.PORT || 3001}`);
  });

// Middleware xử lý lỗi chung
app.use(errorHandler);

module.exports = app;
