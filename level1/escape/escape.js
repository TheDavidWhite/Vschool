const readline = require("readline-sync");

let findkey = false
let dead = false

const name  = readline.question("What is your name? ");
console.log(name + 'You have been trap you have three choose: ')

while (!findkey && !dead) {
    let options = ['Put hand in the hole', 'look for key', 'open door']
    const option = readline.keyInSelect(options, 'choose another answer')
    // console.log(option,'find the key')
    if (option === 1) {
        dead = true
        console.log('roof clapse and kills you')
    } else if (option === 0) {
        findkey = true
        console.log('you have escape')
        console.log('the end')
    } else if (option === 3) {
        console.log('try again')
    }
}

