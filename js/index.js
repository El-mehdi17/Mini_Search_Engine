const readline = require('readline');
const chercher_sur_mot=require("./engine.js")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function executeCommand(command) {

    const [action, ...args] = command.trim().split(' ');

    switch (action.toLowerCase()) {

        case 'hello':
            console.log('Hello', args[0] || 'User how are you');
            break;

        case 'sum':
            console.log(Number(args[0]) + Number(args[1]));
            break;

        case 'clear':
            console.clear();
            break;
        case "search":
          chercher_sur_mot(args[0]) 
             break
        case 'help':
            console.log(`
Available Commands:

hello <name>
sum <number1> <number2>
search <word>
clear
help
exit
            `);
            break;

        case 'exit':
            rl.close();
            return false;

        default:
            console.log('Command not found!');
    }

    return true;
}

function start() {

    rl.question('MyCLI> ', (input) => {

        if (executeCommand(input)) {
            start();
        }

    });

}

start();