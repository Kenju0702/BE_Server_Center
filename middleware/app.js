const express = require('express');
const cors = require('cors');

const appMiddleware = (app) => {
  // CORS Configuration
  app.use(cors());

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Middleware to parse URL-encoded bodies
  app.use(express.urlencoded({ extended: true }));

  // Optional: custom logging middleware
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
};

module.exports = appMiddleware;
