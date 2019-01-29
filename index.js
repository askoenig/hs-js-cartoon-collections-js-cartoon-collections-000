function dwarfRollCall(dwarves) {
  var newDwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
   newDwarves.push(`${i + 1}. ${dwarves[i]}`);
  }
  return newDwarves.join(" ");
}

function summonCaptainPlanet(planeteerCalls){
  var uppercase = []
  for (var i = 0; i < planeteerCalls.length; i++) {
    uppercase.push(planeteerCalls[i].toUpperCase()+ "!")
  }
return uppercase
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
