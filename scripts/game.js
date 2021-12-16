let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
};

const showScore = () => (document.getElementById("score").innerText = game.score);

function addTurn() {
    playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurn();
}

module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
};