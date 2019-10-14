//javascript
$(document).ready(function() {
  //math.random for Rupee variables along with player wins/losses
    //player wins
    var winCount = 0; //#of wins stored here
    $("#winScore").text("Wins: " + winCount); 
    //player losses
    var lossCount = 0;
    $("#lossScore").text("losses: " + lossCount);
    //total player score
    var playerScore = 0;
    $("#playerScore").text("Player Score: " + playerScore);
    //game score that is randomized by computer and random rupee values
    var gameScore = Math.floor((Math.random() * 102) + 19); 
    $("#gameScore").text("Game Score: " + gameScore);
    var rupee1 = Math.floor(Math.random() * 12) + 1;
    var rupee2 = Math.floor(Math.random() * 12) + 1;
    var rupee3 = Math.floor(Math.random() * 12) + 1;
    var rupee4 = Math.floor(Math.random() * 12) + 1;
    //console.log for game score and rupee values
    console.log(gameScore);
    console.log(rupee1);
    console.log(rupee2);
    console.log(rupee3);
    console.log(rupee4);
    
//Functions to reset the game and values after wins and losses

function resetGame() {
    playerScore = 0;
    gameScore = Math.floor((Math.random() * 102) + 19); 
    rupee1 = Math.floor(Math.random() * 12) + 1;
    rupee2 = Math.floor(Math.random() * 12) + 1;
    rupee3 = Math.floor(Math.random() * 12) + 1;
    rupee4 = Math.floor(Math.random() * 12) + 1;
    $("#playerScore").text("Player Score: " + playerScore);
    $("#gameScore").text("Game Score: " + gameScore);
    console.log(gameScore);
    console.log(rupee1);
    console.log(rupee2);
    console.log(rupee3);
    console.log(rupee4);
}
function gameWin() {
    alert("You win!");
    winCount = winCount + 1;
    $("#winScore").text("Wins: " +winCount);
    resetGame();
}

function gameLoss() {
    alert("You lose... Try again!");
    lossCount =lossCount + 1;
    $("#lossScore").text("Losses: " + lossCount);
    resetGame();
}
//Event listeners/onclick functions for crystal values

//Rupee1 onclick function
$("#rupee1").click(function() {
    playerScore = playerScore + rupee1; //adds value from rupee to playerScore
    console.log("Player Score: " + playerScore);
    $("#playerScore").text("Player Score: " + playerScore);
        if (playerScore === gameScore) {
            gameWin();
        }   else if (playerScore > gameScore) {
            gameLoss();
        }
        
});

//Rupee2 onclick function
$("#rupee2").click(function() {
    playerScore = playerScore + rupee2; //adds value from rupee to playerScore
    console.log("Player Score: " + playerScore);
    $("#playerScore").text("Player Score: " + playerScore);
        if (playerScore === gameScore) {
            gameWin();
        }   else if (playerScore > gameScore) {
            gameLoss();
        }
        
});

//Rupee3 onclick function
$("#rupee3").click(function() {
    playerScore = playerScore + rupee3; //adds value from rupee to playerScore
    console.log("Player Score: " + playerScore);
    $("#playerScore").text("Player Score: " + playerScore);
        if (playerScore === gameScore) {
            gameWin();
        }   else if (playerScore > gameScore) {
            gameLoss();
        }
        
});

//Rupee4 onclick function
$("#rupee4").click(function() {
    playerScore = playerScore + rupee4; //adds value from rupee to playerScore
    console.log("Player Score: " + playerScore);
    $("#playerScore").text("Player Score: " + playerScore);
        if (playerScore === gameScore) {
            gameWin();
        }   else if (playerScore > gameScore) {
            gameLoss();
        }
        
});

});