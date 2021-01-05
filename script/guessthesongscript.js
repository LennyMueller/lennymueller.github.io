
var player = 2;

for (i = 0; i < player; i++) {

}

function newPlayer() {
  var newScorecard = document.createElement("div");
  var button = document.getElementById("addbutton");

  
}




function add(id) {

  id = id + " score";

  let score = document.getElementById(id).innerHTML;
  score++;
  document.getElementById(id).innerHTML = score;

}
