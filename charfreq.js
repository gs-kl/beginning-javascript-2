function charFreq(string){
  charArray = string.split("");
  var frequency = new Object();
  
  for (i=0; i<charArray.length; i++){
    currentChar = charArray[i];
    if (typeof frequency[currentChar] === "undefined"){
      frequency[currentChar] = 1;
    } else {
      frequency[currentChar] += 1;
    }
  }

  return frequency;
}

// Example function call
// console.log(charFreq("asdfa"));




function charFreqWithForEach(string){
  charArray = string.split("");
  var frequency = new Object();
  charArray.forEach(updateFrequency);
  return frequency;

  function updateFrequency(element, index, array){
    if (typeof frequency[element] === "undefined"){
      frequency[element] = 1;
    } else {
      frequency[element] += 1;
    }
  }
}

// Example function call
console.log(charFreqWithForEach("asdfa"));


