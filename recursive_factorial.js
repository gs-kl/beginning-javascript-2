function recursive_factorial(number){
  if (number === 0){
    return 1;
  } else {
    return number * recursive_factorial(number - 1);
  }
}

// Example function call
console.log(recursive_factorial(3));
