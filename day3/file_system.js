const fs = require('fs');

// Write a file
fs.writeFileSync('example.txt', 'Hello, Node File System!');

// Read the file
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('Read content:', data);

// Delete the file
fs.unlinkSync('example.txt');