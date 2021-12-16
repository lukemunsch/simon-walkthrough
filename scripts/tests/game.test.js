/**
 * @jest-environment jsdom
 */

const {game, newGame, showScore} = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("new game function works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = ["button1", "button2"];
        game.playerMoves = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
        showScore();
    });
    test("game score should be set to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("should be one move in the current Game array", () => {
        expect(game.currentGame.length).toEqual(1);
    });
    test("game player moves array should be empty", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("score showing in html should reset to 0", () => {
        expect(document.getElementById("score").innerText).toEqual(0)
    })
});