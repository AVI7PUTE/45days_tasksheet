// core-modules.js
const fs = require('fs');
const os = require('os');
const path = require('path');

console.log("Home Directory:", os.homedir());
console.log("Current File Path:", __filename);

const filePath = path.join(__dirname, 'sample.txt');
fs.writeFileSync(filePath, 'Hello from Node.js core modules!');
console.log("File written at:", filePath);
