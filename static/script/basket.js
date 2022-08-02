var productPrice = 125;
var quantity = 0;

function addBasketTotal() {
    return productPrice * quantity;
}


function updateBasket() {
    var basketTotal = document.getElementById('basketTotal'); 
    var quantityInput = document.getElementById('quantityInput');
    quantity += parseInt(quantityInput.value);
    basketTotal.innerHTML = addBasketTotal();
}
var addToCartBtn = document.getElementById('addToCart');

addToCartBtn.addEventListener('click',updateBasket);







 // increase/decrease function
 function increase() {
    document.getElementById('quantityInput').stepUp();
  }
  function decrease() {
    document.getElementById('quantityInput').stepDown();
  }
  