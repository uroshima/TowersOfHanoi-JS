const Game = require("./game.js");
const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

let newGame = reader.question("You wanna play again? y/n", function (answer) {
  return answer;
});
if (newGame == 'y') {
  let game = new Game(reader, newGame);
}
