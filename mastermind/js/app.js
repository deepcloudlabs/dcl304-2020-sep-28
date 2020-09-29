class MastermindController {
    constructor(game) {
        this.game = game;
        this.spanGameLevel = document.querySelector("#gameLevel");
        this.spanTries = document.querySelector("#tries");
        this.inputTextGuess = document.querySelector("#guess");
        this.playBtn = document.querySelector("#playBtn");
        this.movesBody = document.querySelector("#movesBody");
        this.playBtn.addEventListener('click', () => {
            game.play(Number(this.inputTextGuess.value));
            this.updateView();
        }, false);
    }

    updateView = () => {
        this.spanTries.innerText = this.game.tries;
        this.spanGameLevel.innerText = this.game.gameLevel;
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

window.onload = () => {
    console.log("App is started...");
    let game = new Game(); // Model
    let controller = new MastermindController(game);
}