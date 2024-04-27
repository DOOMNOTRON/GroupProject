document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    document.getElementById("displayName").textContent = username;
    document.getElementById("userForm").style.display = "none";
    document.getElementById("gameSection").style.display = "block";
});

var winCount = 0;
var loseCount = 0;
var drawCount = 0;

// Simulating a game scenario. Passes in two parameter from the button clicked by the user.
function playGame(playerMove, num) {

    console.log('Player selects: ' + playerMove, num);
    //calls the method and returns 2 variables. A string and its index. I do not know if the index is important but it made it easier for me to see the logic of the game.
    //both string and index are stored in 'aiSelections'
    var aiSelections = aiMoves();

    // pulls out the individual parts stored and sets the to the var name.
    var aiMove = aiSelections.selection;
    var aiIndex = aiSelections.index;
    
    // Draw scenario
    if (aiMove === playerMove) {
        drawCount++;
        console.log('Tie game')
    }
    // Winning scenarios
    else if ((aiIndex === 0 && num === 1) || (aiIndex == 1 && num === 2) ||(aiIndex === 2 && num === 0)) {
        winCount++;
        console.log('You Win!')
    }
    // All else will be losing scenarios
    else {
        loseCount++;
        console.log('You Lose!')
    }

    // Update the score display
    document.getElementById("winCount").textContent = winCount;
    document.getElementById("loseCount").textContent = loseCount;
    document.getElementById("drawCount").textContent = drawCount;
    return;
}

// Method to randomly select a string from an array. Returns a string and its corresponding index.
function aiMoves() {
    var gameArray = ['rock', 'paper', 'scissors'];
    // Picks a random index
    var randomIndex = Math.floor(Math.random() * gameArray.length);
    // Gets the string of the selected random index.
    var randomSelection = gameArray[randomIndex];


    console.log('Ai selects: ' + randomSelection, randomIndex);
    return {selection: randomSelection, index: randomIndex};
}

// Resets score to zeros
function resetGame() {

    winCount = 0;
    loseCount = 0;
    drawCount = 0;

    document.getElementById("winCount").textContent = winCount;
    document.getElementById("loseCount").textContent = loseCount;
    document.getElementById("drawCount").textContent = drawCount;
    return;
}