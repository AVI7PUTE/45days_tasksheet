// Import the express module
const express = require('express');

// Create an Express application
const app = express();
 
// Define the port
const port = 3000;

// Middleware to parse incoming JSON (for POST requests)
app.use(express.json());


// Basic GET Routes

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
  res.send('This is the Contact Page');
});

//  Route with URL Parameter

app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Welcome, ${username}!`);
});

//  POST Route

app.post('/submit', (req, res) => {
  const data = req.body;
  res.send(`Form submitted successfully! Received: ${JSON.stringify(data)}`);
});

// Start the Server

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});