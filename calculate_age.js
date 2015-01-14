function calculateAge(birthYear, currentYear){
  var max = currentYear - birthYear;
  console.log("Your current age is either " + (max - 1) + " or " + max + ".");
}

// Example function call
calculateAge(2000, 2015);



function calculateAge2(birthYear){
  var currentYear = new Date().getFullYear();
  var max = currentYear - birthYear;
  console.log("Your current age is either " + (max - 1) + " or " + max + ".");
}

// Example function call
calculateAge2(2000,2015);
