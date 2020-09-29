class MastermindController {
    constructor(game) {
        this.game = game;
        this.spanGameLevel = document.querySelector("#gameLevel");
        this.spanTries = document.querySelector("#tries");
        this.inputTextGuess = document.querySelector("#guess");
        this.playBtn = document.querySelector("#playBtn");
        this.movesBody = document.querySelector("#movesBody");
        this.playBtn.addEventListener('click', () => {
            game.play(123);
            console.log("Button is clicked!");
        }, false);
    }
}
window.onload = () => {
    console.log("App is started...");
    let game = new Game(); // Model
    let controller = new MastermindController(game);
}