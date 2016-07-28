var STORAGE_ID = 'shopping-cart';

var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}

// an array with all of our cart items
var cart = getFromLocalStorage();

var total = 0;

var updateCart = function () {

  $(".cart-list").empty();

  total = 0;

  var source = $('#store-template').html();
  var template = Handlebars.compile(source);

    for (var i = 0; i < cart.length; i++) {
    
      var newHTML = template(cart[i]);
      
      $('.cart-list').append(newHTML);

      total += cart[i].price;
    };
      $(".total").text(total);
}


var addItem = function (name, price) {
  
  var item = {
    name: name,
    price: price
  };

  cart.push(item);
  saveToLocalStorage();
}

var clearCart = function () {

 //html clear...client
  $(".cart-list").empty();
  $(".total").empty();

  //javascript clear...database
  cart = [];
  total = 0;

  saveToLocalStorage();
}


$('.view-cart').on('click', function () {

  $(".shopping-cart").toggle("fast"); 
  });


$('.add-to-cart').on('click', function () {

  var name = ($(this).closest(".item").data().name);
  var price = ($(this).closest(".item").data().price);
  
  addItem(name, price);
  updateCart();
});


$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();


