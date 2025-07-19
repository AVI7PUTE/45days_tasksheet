// index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Built-in Middleware
app.use(express.json());

// Third-party Middleware
app.use(cors());
app.use(morgan('dev'));

// Custom Middleware (logs method and URL)
app.use((req, res, next) => {
  console.log(`Custom Logger: ${req.method} ${req.url}`);
  next();
});

// Sample Route
app.get('/', (req, res) => {
  res.send('Welcome to Smart Middleware App!');
});

// Route that throws an error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong intentionally!');
  next(err); // Pass to error-handling middleware
});

// Route with parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ID is ${userId}` });
});

// 404 Middleware (for unmatched routes)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route Not Found' });
});

// Error-handling Middleware (must have 4 args)
app.use((err, req, res, next) => {
  console.error('Error Stack:', err.stack);
  res.status(500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});