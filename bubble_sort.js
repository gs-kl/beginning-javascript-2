function bubbleSort(array){
  for (i = 0; i < array.length; i++){
    iterations = 0;
    for (j = 0; j < (array.length - iterations); j++){
      if (array[j] > array[j+1]){
        temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
      console.log("int complete")
    }
    iterations++;
    console.log("ext complete")
  }
  return array;
}

// Example method call
console.log(bubbleSort([4,3,2,1]));
