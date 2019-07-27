const sum = (a, b) => a + b;
const PI = 3.14

class SomeMathObject {
    constructor() {
        console.log('SomeMathObject constructor called')
    }
}

// 1:
// module.export = sum

// 2. Multiple ones:
// module.exports.sum = sum
// module.exports.PI = PI
// module.exports.SomeMathObject = SomeMathObject

// 3: As JSON:
module.exports = { sum : sum, PI : PI, SomeMathObject : SomeMathObject };
