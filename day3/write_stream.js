// write_stream.js
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Writing with stream.\n');
writeStream.end('Stream ended.');