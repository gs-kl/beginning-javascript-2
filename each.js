function each(array, callback){
  for (i=0; i<array.length; i++){
    callback(array[i]);
  }
}

// Example method call
each([1,2,3],function(number){
  console.log(number);
});
