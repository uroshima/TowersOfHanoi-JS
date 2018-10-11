class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", start => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", end => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isValidMove(startTowerIdx, endTowerIdx) {
   const startTower = this.towers[startTowerIdx];
   const endTower = this.towers[endTowerIdx];

   if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      const topStartDisc = startTower[startTower.length - 1];
      const topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    }
    return false;
  }

  isWon() {
    return (this.towers[1].length == 3) || (this.towers[2].length == 3)
  }

  run(reader, completionCallback) {
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }
      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, completionCallback);
      } else {
        this.print();
        console.log("You win!");
        completionCallback();
      }
    });  
  }
}

module.exports = Game;
