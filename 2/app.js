const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

// 1: 
// eventEmitter.on('tutorial', () => {
//     console.log('tutorial event triggered')
// })

// eventEmitter.emit('tutorial')


// 2: With arguments
// eventEmitter.on('tutorial', (a, b) => {
//     console.log(`a + b = ${a + b}`);
// })

// eventEmitter.emit('tutorial', 3, 2)



// 3: Extending event emitter:

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    // getName() {
    //     return this._name;
    // }

    get name() {    // NOTE: This is how you define getters in Node.
        return this._name
    }
}

let pedro = new Person('Pedro')
let christina = new Person('Christina')
pedro.on('name', () => {
    console.log('called: ' + pedro.name)
})

christina.on('name', () => {
    console.log('called: ' + christina.name)
})

pedro.emit('name')
christina.emit('name')
