class Game {
  constructor() {
    this.stacks = [[3, 2, 1], [], []];
    this.promptMove();
  }

  promptMove() {
    console.log(this.stacks);
    this.startTowerIdx = prompt("What tower you wanna take a disc from");
    this.endTowerIdx = prompt("What tower you wanna put the disc on?");
    console.log(`take from tower ${this.startTowerIdx} and place it on tower ${this.endTowerIdx}`);

  }

  isValidMove(startTowerIdx, endTowerIdx) {
   this.startTowerIdx = startTowerIdx - 1;
   this.endTowerIdx = endTowerIdx - 1;
   let error = new Error("Invalid move");
   if ((this.startTowerIdx > 3 && this.startTowerIdx < 1) && (this.endTowerIdx > 3 && this.endTowerIdx < 1)) {
     console.log(error);
   } else if (!this.stacks[this.startTowerIdx][-1])
     console.log(error);
    else if (this.stacks[this.startTowerIdx][-1] > this.stack[this.endTowerIdx][-1])
     console.log(error);
    else
     return true;
 }
}

module.exports = Game;

// var favDrink = prompt("What's your favorite cocktail drink?");
// switch(favDrink) {
//     case "Martini":
//         text = "Excellent choice! Martini is good for your soul.";
//         break;
//     case "Daiquiri":
//         text = "Daiquiri is my favorite too!";
//         break;
//     case "Cosmopolitan":
//         text = "Really? Are you sure the Cosmopolitan is your favorite?";
//         break;
//     default:
//         text = "I have never heard of that one..";
//         break;
// }
// module.exports = Game;
