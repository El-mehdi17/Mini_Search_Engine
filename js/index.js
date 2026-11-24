const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const {search}=require("./engine.js")

function executeCommand(command) {

    const [action, ...args] = command.trim().split(/\s+/);

    switch (action.toLowerCase()) {

        case 'hello':
            console.log(`Hello, ${args[0] || 'User'}!`);
            break;

        case 'sum':
                const a = Number(args[0]);
                const b = Number(args[1]);
                if (Number.isNaN(a) || Number.isNaN(b)) {
                   console.log('Usage: sum <number1> <number2>');
                }          
                else {
                   console.log(a + b);
                }
                break;

        case 'clear':
            console.clear();
            break;
        case "search":
            if(!args[0]){
                console.log("Usage: search <word>")
            }
            search(args[0]) 
             break
        case 'help':
            console.log(`
Available Commands:

hello <name>       — greet
sum <a> <b>        — add two numbers
search <word>      — search in .txt files
clear              — clear screen
help               — show this message
exit               — quit
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
    rl.on("SIGINT",()=>{
        console.log("\nGoodbye!");
        rl.close()
        process.exit(0);
    })

}

start();