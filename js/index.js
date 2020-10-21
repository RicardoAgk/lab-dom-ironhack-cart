// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subTotal =  product.querySelector('.subtotal span');
  let preSubTotal = price.innerHTML * quantity.value;
  subTotal.innerHTML = price.innerHTML * quantity.value;
  return preSubTotal
}
var preTotalValue = 0;
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here

  let totalList = document.getElementsByClassName('product');
  let totalListArray = [...totalList];
  let totalValue = totalListArray.forEach((item) => {
    preTotalValue += updateSubtotal(item)

  });

  // ITERATION 3
  //... your code goes here
  
  let totalHolder = document.getElementById('total-value');
  totalHolder.innerHTML = parseInt(preTotalValue);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
