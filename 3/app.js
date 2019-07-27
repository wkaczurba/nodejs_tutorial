const readline = require('readline')
const rl = readline.createInterface({input : process.stdin,
        output : process.stdout})


//let s = rl.readline('')

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?`,
    (userInput) => {
        if (userInput.trim() == answer) {
            console.log(`Got from user: ${userInput}`);
            rl.close();
        } else {
            rl.setPrompt('Incorrect response please try again\n');
            rl.prompt();
            rl.on('line', (userInput) => {  // NOTE: THis line will keep executing until correct answer is given.
                if (userInput.trim() == answer) {
                    rl.close();
                } else {
                    console.log(`Your answer of ${ userInput } is incorrect. Try again.`);
                    rl.prompt();
                }
            })
        }
        
    });

rl.on('close', () => {
    console.log('Correct!!!')
})
