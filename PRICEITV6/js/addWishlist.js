const textchange = document.getElementById("statusmessage");

function successbutton() {
  document.getElementById("addToWishlist").className = "btn btn-success";
  updatetext();
  setTimeout(addToWishlist, 1000);
  console.log("function over :3")

}
function updatetext() {
  const textchange = document.getElementById("statusmessage");

  textchange.className = "text-black text-center"
  textchange.textContent = "Added to wishlist!"
}
function addToWishlist() {
  // Get product information
  console.log("this function is running")
  var productJson = localStorage.getItem("product");
  var product = JSON.parse(productJson);

  // Get existing wishlist items from local storage
  var wishlistJson = localStorage.getItem("wishlist");
  var wishlist = JSON.parse(wishlistJson) || [];

  // Add product to wishlist
  wishlist.push(product);

  // Save updated wishlist to local storage
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  location.reload();

  // Show success message
  wishlist.forEach(function (item) {
    // Create a li element for the item
    var li = $("<li>").appendTo("#wishlist-items");

    // Create an img element for the item image
    $("<img>").attr("src", item[4]).appendTo(li);

    // Create a span element for the item name
    $("<span>").text(item[2]).appendTo(li);

    // Create a span element for the item price
    $("<span>").text(item[1]).appendTo(li);

    // Create a 'dislike' button to remove item from wishlist
    $("<button type = 'button' class='btn btn-danger' id = 'removeWishlist'>Remove Item</button>").appendTo(li);

  });
};
document.addEventListener("DOMContentLoaded", function () {
  var addToWishlistBtn = document.getElementById("addToWishlist");
  addToWishlistBtn.addEventListener("click", successbutton);
});

// Retrieve wishlist items from localStorage
var wishlistJson = localStorage.getItem("wishlist");
var wishlist = JSON.parse(wishlistJson);

// Iterate through each item and add it to the wishlist-items ul
