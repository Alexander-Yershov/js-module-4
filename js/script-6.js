function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach (function (number, index){ 
    if (number > value) {
      filteredNumbers.push(number);
    }});
  

  // Change code above this line
  return filteredNumbers;
}