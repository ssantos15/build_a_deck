$(document).ready(function() {
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9","10", "Jack", "Queen", "King"];
  var suits = ["Diamond", "Spade", "Heart", "Club"];


  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $("#output").append("<li>" + rank + " of " + suit + "</li>");
    });
  });
});
