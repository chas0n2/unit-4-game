//javascript
$(document).ready(function() {

    //Variable values and defaults
    var winCount = 0; //#of wins stored here
    $("#winScore").text("Wins: " + winCount); //jquery count for displaying wins score
    var lossCount = 0;
    $("#lossScore").text("losses: " + lossCount);
    var playerScore = 0;
    $("#playerScore").text("Player Score: " + playerScore);
    //math.random for Rupee variables along with player and random game score
    
    //floor @19 and random between 19-120? still getting values over
    var gameScore = Math.floor((Math.random() * 102) + 19); 
    $("#gameScore").text("Game Score: " + gameScore);
})