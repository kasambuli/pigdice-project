function rollDice() {
  var total = 0;
  var roll = Math.floor(Math.random() * 6) + 1;
  if (roll != 1) {
    total = roll + total;
  }
  return total;
}
$(document).ready(function() {
  $("#roll2").click(function(e) {
    e.preventDefault();
    $("#firstDie").text(rollDice());
  });
});