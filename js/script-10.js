// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item, index) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line