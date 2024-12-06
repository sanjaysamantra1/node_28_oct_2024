const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', () => {    // captures the event
    console.log(`Greet Event.....`)
});
eventEmitter.emit('greet'); // emits event
eventEmitter.emit('greet'); // emits event

// event with params
eventEmitter.on('calculate', (a, b) => {    // captures the event
    console.log(`Addition of ${a} and ${b} is ${a + b}`)
    console.log(`Subtraction of ${a} and ${b} is ${a - b}`)
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`)
    console.log(`Division of ${a} and ${b} is ${a / b}`)
});
eventEmitter.emit('calculate', 20, 10);