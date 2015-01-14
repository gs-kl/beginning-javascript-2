function findLengthOfLongestWord(arrayOfWords){
  lengthOfLongestWord = 0;
  for (i=0;i<arrayOfWords.length;i++){
    if (arrayOfWords[i].length > lengthOfLongestWord){
      lengthOfLongestWord = arrayOfWords[i].length;
    }
  }
  return lengthOfLongestWord;
}

// Example method call
console.log(findLengthOfLongestWord(["asdf","asdfasdf"]));
