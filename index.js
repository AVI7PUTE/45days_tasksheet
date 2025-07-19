// Import express
const express = require('express');

// Initialize the app
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Home route - GET
app.get('/', (req, res) => {
  res.send('Welcome to Express.js!');
});

// About route - GET
app.get('/about', (req, res) => {
  res.send('This is the About page');
});

// Contact route - POST
app.post('/contact', (req, res) => {
  const { name, email } = req.body;
  res.send(`Thank you ${name}, we received your contact form with email: ${email}`);
});

// Profile route - PUT
app.put('/profile', (req, res) => {
  const { username } = req.body;
  res.send(`User profile for ${username} has been updated`);
});

// Delete account - DELETE
app.delete('/delete-account', (req, res) => {
  const { username } = req.body;
  res.send(`Account for ${username} has been deleted`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
