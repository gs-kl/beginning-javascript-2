function rovarspraket(string){
  characterArray = string.split("");
  for (i=0; i<characterArray.length; i++){
    if ((/[^aeiou ]/.test(characterArray[i])) == true){
      replace = characterArray[i] + "o" + characterArray[i];
      characterArray[i] = replace;
    }
  }
  return characterArray.join("");
}

// Example function call
console.log(rovarspraket("this is fun"));
