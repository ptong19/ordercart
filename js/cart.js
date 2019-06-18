/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementsByTagName('tr').innerHTML = '';

  

  // var table = document.getElementById('cart');

  // try somethings new with childNodes

  // var tbody = table.childNodes;
  // console.log(tbody[0].childNodes);
  // //var nodes = tbody.firstChild;

  

  // for (var i = 0; i < cart.items.length; i++) {
  //   //tbody.removeChild(tbody.firstChild);
  // }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbody = document.getElementsByTagName('tbody');

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    var tr = document.createElement('tr');
    tr.setAttribute('id', i);
    tbody.appendChild(tr);
  
    // TODO: Create a TD for the delete link, quantity,  and the item
    var killTd = document.createElement('td');
    killTd.textContent = 'X';
    tr.appendChild(killTd);

    var quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    tr.appendChild(quantityTd);

    var itemTd = document.createElement('td');
    itemTd.textContent = cart.items[i].product;
    tr.appendChild(itemTd);
  }
}


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (event.target.textContent === 'X') {
    cart.removeItem(event.target.id); 
    // I think somethings needs to be added between target.''. id
  }
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
