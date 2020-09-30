import {Game} from "./mastermind.js";
import {Move} from "./move.js";

class MastermindController {
    constructor(game) {
        this.game = game;
        this.spanGameLevel = document.querySelector("#gameLevel");
        this.spanTries = document.querySelector("#tries");
        this.spanCounter = document.querySelector("#counter");
        this.inputTextGuess = document.querySelector("#guess");
        this.playBtn = document.querySelector("#playBtn");
        this.movesBody = document.querySelector("#movesBody");
        let item = localStorage.getItem("game");
        if (item != null) {
            let gameItem = JSON.parse(item);
            this.game.gameLevel = gameItem.gameLevel;
            this.game.initializeGame();
        }
        this.updateView();
        this.playBtn.addEventListener('click', () => {
            game.play(Number(this.inputTextGuess.value));
            this.updateView();
            localStorage.setItem("game", JSON.stringify(this.game))
        }, false);
        setInterval(() => {
            this.game.countDown();
            this.updateView();
        }, 1000);
    }

    updateView = () => {
        this.spanTries.innerText = this.game.tries;
        this.spanGameLevel.innerText = this.game.gameLevel;
        this.spanCounter.innerText = this.game.counter;
        this.emptyElement(this.movesBody);
        for (let move of this.game.moves) {
            let tr = this.movesBody.insertRow();
            let tdGuess = tr.insertCell(0);
            let tdEvaluation = tr.insertCell(1);
            tdGuess.appendChild(document.createTextNode(move.guess));
            tdEvaluation.appendChild(document.createTextNode(move.evaluation));
        }
    }

    emptyElement = (e) => {
        let node = e;
        while (e.hasChildNodes()) {
            if (node.hasChildNodes()) {
                node = node.lastChild;
            } else {
                node = node.parentNode;
                node.removeChild(node.lastChild);
            }
        }
    }
}

let game = new Game(); // Model
window.onload = () => {
    console.log("App is started...");
    let controller = new MastermindController(game);
}