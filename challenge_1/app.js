
var tic = "X";
var lastTurn = null;
var results = [];

var winnerCheck = function(currentTic) {
  currentTic === 'X' ? currentTic = 'O' : currentTic = 'X';
  var message = "There\'s a winner! " + currentTic + " has won!!!"
  if (results[0] !== undefined && results[0] === results[1] && results[0] === results[2]) {
    return gameEnded(message, currentTic);
  }
  if (results[0] !== undefined && results[0] === results[3] && results[0] === results[6]) {
    return gameEnded(message, currentTic);
  }
  if (results[0] !== undefined && results[0] === results[4] && results[0] === results[8]) {
    return gameEnded(message, currentTic);
  }
  if (results[3] !== undefined && results[3] === results[4] && results[3] === results[5]) {
    return gameEnded(message, currentTic);
  }
  if (results[6] !== undefined && results[6] === results[7] && results[6] === results[8]) {
    return gameEnded(message, currentTic);
  }
  if (results[1] !== undefined && results[1] === results[4] && results[1] === results[7]) {
    return gameEnded(message, currentTic);
  }
  if (results[2] !== undefined && results[2] === results[5] && results[2] === results[8]) {
    return gameEnded(message, currentTic);
  }
  if (results[2] !== undefined && results[2] === results[4] && results[2] === results[6]) {
    return gameEnded(message, currentTic);
  }

  if (results.length === 9) {
    for (var i = 0; i < results.length; i++) {
      if (results[i] === undefined) {
        return;
      }
    }
    return gameEnded('No one won this round, please play again!');
  }
}

var setUp = function() {
  tic = "X";
  lastTurn = null;
  results = [];
  document.getElementById('winner').innerHTML = ""

  var anchors = document.getElementsByTagName('td');
  for(var z = 0; z < anchors.length; z++) {
    var elem = anchors[z];
    elem.onclick = function(e) {

      if (document.getElementById(e.target.id).innerHTML !== "") {
        if (lastTurn === e.target.id) {
          results[Number(e.target.id)] = ".";
          document.getElementById(e.target.id).innerHTML = "";
          if (tic === "X") {
            tic = "O";
          } else {
            tic = "X";
          }
          return;
        } else {
          return alert('Sorry, choose another spot!')
        }
      }

      document.getElementById(e.target.id).innerHTML = tic;
      results[Number(e.target.id)] = tic;
      setTimeout(function(){winnerCheck(tic)},);

      if (tic === "X") {
        tic = "O";
        lastTurn = e.target.id;
      } else {
        tic = "X"
        lastTurn = e.target.id;
      }
    };
  }
}

var gameEnded = (message, winner) => {
  document.getElementById('winner').innerHTML = 'The winner is: ' + winner;
  setTimeout(alert(message),100);
  document.getElementById('table').onclick = gameEndedAlert;
  return stopClicks();
}

setUp();
var gameEndedAlert = () => {
  alert('Game has ended, please reset to continue!');
}
var stopClicks = () => {
  var anchors = document.getElementsByTagName('td');
  for(var z = 0; z < anchors.length; z++) {
    var elem = anchors[z];
    elem.onclick = function(e) {
      return;
    };
  }
}
var reset = () => {
  var anchors = document.getElementsByTagName('td');
  for(var z = 0; z < anchors.length; z++) {
    var elem = anchors[z];
    elem.innerHTML = "";
  }
  setUp();
  document.getElementById('table').onclick = () => {};

}

document.getElementById('button').onclick = reset;




// document.getElementById("h").addEventListener("click", function(){ document.getElementById("h").innerHTML ='Hello World' });
// document.getElementById("table").addEventListener("click", function(){ console.log('hello'); });
// console.log(document.getElementsByTagName('td'))

