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
};

const showScore = () => (document.getElementById("score").innerText = 0);

module.exports = {
    game,
    newGame,
    showScore,
};