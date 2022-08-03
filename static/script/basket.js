var productPrice = 125;
var quantity = 0;

function addBasketTotal() {
    return productPrice * quantity;
}


function updateBasket() {
    var basketTotal = document.getElementById('basketTotal'); 
    var quantityInput = document.getElementById('quantityInput');
    var productName = document.getElementById('productName').innerHTML;
    var itemPrice = document.getElementById('itemPrice').innerHTML;
    quantity += parseInt(quantityInput.value);
    basketTotal.innerHTML = addBasketTotal();
    basketName.innerHTML = productName;
    basketPrice.innerHTML = itemPrice;
    document.getElementById("basketMultiplier").innerHTML = "X";
    document.getElementById("basketThumbnail").style.display = "block";
    document.getElementById("basketQuantity").innerHTML = quantityInput.value;
    document.getElementById("basketDelete").style.display = "block";
    document.getElementById("checkoutModal").style.display = "block";
    document.getElementById("emptyBasket").style.display = "none";
}
var addToCartBtn = document.getElementById('addToCart');

addToCartBtn.addEventListener('click',updateBasket);



//const price = 1470000.15;

//let dollarUS = Intl.NumberFormat("en-US", {
    //style: "currency",
    //currency: "USD",
//});
//console.log("Dollars: " + dollarUS.format(price));



 // increase/decrease function
 function increase() {
    document.getElementById('quantityInput').stepUp();
  }
  function decrease() {
    document.getElementById('quantityInput').stepDown();
  }





// Get the basket modal
var cartModal = document.getElementById("myCartModalBackground");

// Get the button that opens the basket modal
var btn = document.getElementById("showCurrentBasket");
btn.onclick = function () {
myCartModalBackground.style.display = "block";
}



// When the user clicks anywhere outside of the basket modal, close it
window.onclick = function(event) {
    if (event.target == myCartModalBackground) {
      myCartModalBackground.style.display = "none";
      }
  } 