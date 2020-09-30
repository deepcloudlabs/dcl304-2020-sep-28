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
import {Move} from "./move.js";

export class Game { // Model
    constructor() {
        this.gameLevel = 3;
        this.tries = 0;
        this.secret = this.createSecret();
        this.moves = [];
        this.counter = 60;
    }

    play = (guess) => {
        guess = Number(guess);
        if (guess === this.secret) {
            this.gameLevel++;
            if (this.gameLevel == 10){
                //TODO: Player wins the game!
            }
            this.initializeGame()
            return;
        }
        this.tries++;
        let evaluation = this.evaluateMove(guess);
        this.moves.push(new Move(guess, evaluation));
    }

    countDown = () => {
        this.counter--;
        if (this.counter <= 0){
            this.initializeGame();
        }
    }

    createSecret = () => {
        let digits = [];
        digits.push(this.createDigit(1, 9));
        while (digits.length < this.gameLevel) {
            let digit = this.createDigit(0, 9);
            if (!digits.includes(digit))
                digits.push(digit);
        }
        console.log(digits);
        return Number(digits.join(''));
    }

    initializeGame = () => {
        this.secret = this.createSecret();
        this.tries = 0;
        this.moves = [];
        this.counter = 60;
    }

    evaluateMove = (guess) => {
        let guessAsStr = guess.toString();
        let secretAsStr = this.secret.toString();
        let perfectMatch = 0;
        let partialMatch = 0;
        for (let i = 0; i < guessAsStr.length; ++i) {
            let g = guessAsStr.charAt(i);
            for (let j = 0; j < secretAsStr.length; ++j) {
                let s = secretAsStr.charAt(j);
                if (g === s) {
                    if (i === j) {
                        perfectMatch++;
                    } else {
                        partialMatch++;
                    }
                }
            }
        }
        return this.generateEvaluationString(perfectMatch, partialMatch);
    }

    generateEvaluationString = (perfectMatch, partialMatch) => {
        if (perfectMatch == 0 && partialMatch == 0) return "No match";
        let message = "";
        if (partialMatch > 0)
            message = `-${partialMatch}`;
        if (perfectMatch > 0)
            message = `${message}+${perfectMatch}`;
        return message;
    }

    createDigit = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}