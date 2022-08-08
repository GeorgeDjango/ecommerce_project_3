var productPrice = 125;
var quantity = 0;

function addBasketTotal() {
    var total = productPrice * quantity;
    return `$${total}.00`;
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
    document.getElementById('basketQuantity').innerHTML = quantity;
    document.getElementById('emptyBasket').style.display = 'none';
    document.getElementById('basketMultiplier').innerHTML = 'X';
    document.getElementById('basketThumbnail').style.display = 'block';
    document.getElementById('basketDelete').style.display = 'block';
    document.getElementById('checkoutModal').style.display = 'block';
    document.getElementById('basketMultiplier').style.display = 'block';
    document.getElementById('basketQuantity').style.display = 'block';
    document.getElementById('basketName').style.display = 'block';
    document.getElementById('basketPrice').style.display = 'block';
    document.getElementById('basketTotal').style.display = 'block';
    var basketNotification = document.getElementById('basketNotification');
    basketNotification.innerHTML = quantity;
    basketNotification.classList.remove('hidden');
}
var addToCartBtn = document.getElementById('addToCart');

addToCartBtn.addEventListener('click',updateBasket);



function basketDelete() {
    quantity = 0;
    basketNotification.classList.add('hidden');
    document.getElementById('basketMultiplier').style.display = 'none';
    document.getElementById('basketThumbnail').style.display = 'none';
    document.getElementById('basketQuantity').style.display = 'none';
    document.getElementById('basketDelete').style.display = 'none';
    document.getElementById('checkoutModal').style.display = 'none';
    document.getElementById('emptyBasket').style.display = 'block';
    document.getElementById('basketName').style.display = 'none';
    document.getElementById('basketPrice').style.display = 'none';
    document.getElementById('basketTotal').style.display = 'none';
}
var basketDeleteBtn = document.getElementById('basketDelete');
basketDeleteBtn.addEventListener('click',basketDelete);



// increase/decrease function
function increase() {
    document.getElementById('quantityInput').stepUp();
}
function decrease() {
    document.getElementById('quantityInput').stepDown();
}





// Get the basket modal
var cartModal = document.getElementById('myCartModalBackground');

// Get the button that opens the basket modal
var btn = document.getElementById('showCurrentBasket');
btn.onclick = function () {
myCartModalBackground.style.display = 'block';
}



// When the user clicks anywhere outside of the basket modal, close it
window.onclick = function(event) {
    if (event.target == myCartModalBackground) {
        myCartModalBackground.style.display = 'none';
    }
} 