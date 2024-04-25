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

// Simulating a game scenario
// Let's say the user clicks a button to play the game, and based on some logic, they either win, lose, or draw
// code not implemented or working yet
function playGame() {
    // Simulated game logic
    var randomNumber = Math.random(); // Generate a random number between 0 and 1

    // If the random number is greater than 0.5, consider it a win, otherwise a loss
    if (randomNumber > 0.5) {
        winCount++;
    } else {
        loseCount++;
    }

    // Update the score display
    document.getElementById("winCount").textContent = winCount;
    document.getElementById("loseCount").textContent = loseCount;
    document.getElementById("drawCount").textContent = drawCount;
}