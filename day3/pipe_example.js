// pipe_example.js
const fs = require('fs');

const reader = fs.createReadStream('source.txt');
const writer = fs.createWriteStream('destination.txt');

reader.pipe(writer); 
