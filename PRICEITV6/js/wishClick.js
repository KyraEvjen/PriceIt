// Retrieve wishlist items from localStorage
var wishlistJson = localStorage.getItem("wishlist");
var wishlist = JSON.parse(wishlistJson);

// Iterate through each item and add it to the wishlist-items ul
wishlist.forEach(function (item) {
  // Create a li element for the item
  var li = $("<li>").appendTo("#wishlist-items");

  // Create an img element for the item image
  $("<img>").attr("src", item[4]).appendTo(li);

  // Create a span element for the item name
  $("<span>").text(item[2]).appendTo(li);

  // Create a span element for the item price
  $("<span>").text(item[3]).appendTo(li);

    // Create a 'dislike' button to remove item from wishlist
    $("<button type = 'button' class='btn btn-danger' id = 'removeWishlist'>Remove Item</button>").appendTo(li);

});