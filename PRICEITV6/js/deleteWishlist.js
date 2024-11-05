$("#removeWishlist").click(function()
{
  // Get existing wishlist items from local storage
  var wishlistJson = localStorage.getItem("wishlist");
  var wishlist = JSON.parse(wishlistJson) || [];

  //identify current item
  wishlist.splice(this, 1);
  console.log(wishlist)

  // remove product from wishlist


  // Save updated wishlist to local storage
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  location.reload();

  // Show success message
  alert("Product removed from wishlist!");
});