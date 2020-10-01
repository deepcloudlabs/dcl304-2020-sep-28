class Game { // Model
    constructor() {
        this.gameLevel = ko.observable(3);
        this.tries = ko.observable(0); // read: this.tries(), write: this.tries(3)
        this.secret = this.createSecret();
        this.moves = ko.observableArray([]);
        this.counter = ko.observable(60);
        this.guess = ko.observable(123);
        setInterval(this.countDown, 1000);
    }

    play = () => {
        if (Number(this.guess()) === this.secret) {
            this.gameLevel(this.gameLevel() + 1);
            if (this.gameLevel() == 10) {
                //TODO: Player wins the game!
            }
            this.initializeGame()
            return;
        }
        this.tries(this.tries()+1);
        let evaluation = this.evaluateMove(this.guess());
        this.moves.push(new Move(this.guess(), evaluation));
    }

    countDown = () => {
        this.counter(this.counter()-1);
        if (this.counter() <= 0) {
            this.initializeGame();
        }
    }

    createSecret = () => {
        let digits = [];
        digits.push(this.createDigit(1, 9));
        while (digits.length < this.gameLevel()) {
            let digit = this.createDigit(0, 9);
            if (!digits.includes(digit))
                digits.push(digit);
        }
        console.log(digits);
        return Number(digits.join(''));
    }

    initializeGame = () => {
        this.secret = this.createSecret();
        this.tries(0);
        this.moves([]);
        this.counter(60);
    }

    evaluateMove = (guess) => {
        let guessAsStr = this.guess().toString();
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