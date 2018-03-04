function rollDice() {
  var total = 0;
  var result = Math.floor(Math.random() * 6) + 1;
  if (result != 1) {
    total = total + result;
  }
  return total;
}

function Player() {
  this.playerName = 0
}
var firstPlayer = new player();
$(document).ready(function() {
  $("#firstRoll").click(function(e) {
    e.preventDefault();
    console.log("firstRoll");
    $("#firstDie").text(rollDice());
  });


  $("#secondRoll").click(function(e) {
    e.preventDefault();
    console.log("secondRoll");
    $("#secondDie").text(rollDice());
  });

  $("#playerOne").submit(function() {
    event.preventDefault();
    firstPlayer.playerName = $(".player2").val().toUpperCase();
    $(".player2name").text(player2.playerName);
    $("#player2").hide();
  });
});