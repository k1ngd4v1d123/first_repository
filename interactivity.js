let cart = 0;

function AddToCart () {
  cart ++;
  // console.log(cart);
  document.querySelector('.cart-items').innerHTML = cart;
}