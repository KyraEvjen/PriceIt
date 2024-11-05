var categoryIndex;
var parsedData;
var products;
function newProduct() {
  // Select a random product from the list
  var productsJson = localStorage.getItem("products");
  var products = JSON.parse(productsJson);
  var randomIndex = Math.floor(Math.random() * products.length);
  var randomProduct = products[randomIndex];
  var productJson = JSON.stringify(randomProduct);
  localStorage.setItem("product", productJson);
}
$(document).ready(function () {

  // Make a GET request for the CSV file
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.csv', true);

  xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 200) {

      // Parse the CSV data using Papa Parse
      var csvData = xhr.responseText;
      var parsedData = Papa.parse(csvData).data;
      // Get a list of all categories
      var categories = [];
      for (var i = 0; i < parsedData.length; i++) {
        var category = parsedData[i][0];
        if (categories.indexOf(category) === -1) {
          categories.push(category);
        }
      }
      categories.splice(0, 1);

      // Add the categories to the select dropdown
      var select = $('.form-select');
      for (var i = 0; i < categories.length; i++) {
        var option = $('<option></option>');
        option.attr('value', i + 1);
        option.text(categories[i]);
        select.append(option);
      }

      select.on('change', function () {
        var categoryIndex = select.val();
        var products = [];

        // Find all products in the selected category
        for (var i = 0; i < parsedData.length; i++) {
          if (parsedData[i][0] === categories[categoryIndex - 1]) {
            products.push(parsedData[i]);
          }
        }
        localStorage.setItem("products", JSON.stringify(products));
        newProduct();
      });
    }
  };
  xhr.send();


});
