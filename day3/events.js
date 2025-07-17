// events_example.js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener
emitter.on('welcome', (user) => {
  console.log(`Welcome, ${user}!`);
});

// Emit the event
emitter.emit('welcome', 'Avishkar');

