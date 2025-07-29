const express = require('express');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.send('Blog route working!');
});

module.exports = router;

