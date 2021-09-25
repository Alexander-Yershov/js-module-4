function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach (function(elment, index){ 
    if (secondArray.includes(elment)){
      commonElements.push(elment);
   }
  });

  return commonElements;
  // Change code above this line
}