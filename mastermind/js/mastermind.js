/**
 *   How mastermind game works:
 Application picks a random number like 742. This is secret and player
 wants to find it out by guessing
 123 -> -1
 452 -> -1+1
 427 -> -3
 472 -> -2+1
 742 -> +3 -> Player wins Game Level: 3 -> 4
 8352 -> Secret
 Game Level: 9 -> Player wins game!
 */
class Game {
    constructor() {
        this.gameLevel = 3;
        this.tries = 0;
        this.secret = this.createSecret();
        this.moves = [];
    }
    play = (guess) => {
        guess = Number(guess);
        if (guess === this.secret){
            this.gameLevel++;
            //TODO: check whether the player wins the game
            this.initializeGame()
            return;
        }
        this.tries++;
        let evaluation = this.evaluateMove(guess);
        this.moves.push(new Move(guess, evaluation));
    }

    createSecret = () => {
        //TODO: implement secret generation logic
        return 123;
    }

    initializeGame = () => {
        //TODO: initialize game
    }

    evaluateMove = (guess) => {
        //TODO: evaluate guess
        return "-1+1";
    }
}