function changeEven(numbers, value) {
  // Change code below this line
  const changeEvenNew = [];
  numbers.forEach (number =>{
      if (number % 2 === 0) {
          changeEvenNew.push(number + value);
        
      }
      else { changeEvenNew.push(number); }
  });
  return changeEvenNew; 
  // Change code above this line
}
    
    console.log(changeEven([1, 2, 3, 4, 5], 10));
    console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
    console.log(changeEven([17, 24, 68, 31, 42], 100));
    console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
