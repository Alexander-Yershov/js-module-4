function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function(orderedItem, index){
    totalPrice += orderedItem
  }); 

  // Change code above this line
  return totalPrice;
}