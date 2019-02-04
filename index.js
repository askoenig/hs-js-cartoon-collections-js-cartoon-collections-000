function dwarfRollCall(dwarves) {
  var newDwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
   newDwarves.push(`${i + 1}. ${dwarves[i]}`);
  }
  return newDwarves.join(" ");
}


function summonCaptainPlanet(planeteerCalls){
  var uppercase = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    uppercase.push(planeteerCalls[i].toUpperCase()+ "!");
  }
return uppercase;
}


function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true 
    }
  }
  return false
  // if (words.length <= 4) 
  // return false;
  // else {
  //   return true;
  //}
}




function findTheCheese(foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++) {
    for (var x = 0; x < cheese.length; x++) {
      if (foods[i] === cheese[x]){
       return cheese[x];
      }
    }
  }
  return "no cheese!";
}