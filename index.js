function dwarfRollCall(dwarves){
  var counting = [];
  for(var i = dwarves.length / 2; i < dwarves.length; i++){
    counting.push(`${i+1}. ${dwarves[i]}`);
  }
  debugger;
  return counting.join(" ");
}


function summonCaptainPlanet(planeteerCalls){
  var scream = [];
  for(var i = 0; i < planeteerCalls.length; i++){
    scream.push(planeteerCalls[i].toUpperCase()+"!");
  }
  return scream;
}


function longPlaneteerCalls(calls){
  for(var i = 0; i < calls.length; i++){
    if(calls[i].length > 4){
      return true
    }
  }
  return false
}


function findTheCheese(foods){
  var cheese = ["cheddar", "gouda", "camembert"]
  for (var i = 0; i <foods.length; i++){
    for (var x = 0; i <cheese.length; i++){
      if (foods[i] === cheese[x]){
        return foods[i]
      }
    }
  }
  return "no cheese!"
}

function wordsWithB(words){
  var bWords = []
  for (var i = 0; i < words.length; i++){
    if (words[i].startsWith("b")){
     bWords.push(words[i])
    }
  }
  return bWords
}