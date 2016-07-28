// an array with all of our cart items
var cart = [];

var total = 0;

var updateCart = function () {
  // TODO: finish

}

var addItem = function (item) {
  // TODO: finish

  cart.push(item);
}

var clearCart = function () {
  // TODO: finish
 //html clear...client
  $(".cart-list").empty();
  $(".total").empty();
  //javascript clear...database
  cart = [];
  total = 0;

}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggle("fast"); 
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var name = ($(this).closest(".item").data().name);
  var price = ($(this).closest(".item").data().price);
  
  var item = [ {name: name, price: price } ];

  var source = $('#store-template').html();
  var template = Handlebars.compile(source);

    for (var i = 0; i < item.length; i++) {
    
      var newHTML = template(item[i]);
      
      $('.cart-list').append(newHTML);

      total += item[i].price;
      $(".total").text(total);
    };

  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();