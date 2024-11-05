let numtries;

let score = 0;

let highscore = 0;
//get an item and display it on the screen
$(document).ready(function () {
  var productJson = localStorage.getItem("product");
  var product = JSON.parse(productJson);

  $('.card-img-top').attr('src', product[4]);
  $('.card-title').text(product[2]);
  $('.card-text').text("Selected from " + product[0]);

  var actualPrice = parseFloat(product[3].split('$').pop())

  // set the correct price
  var actualPrice = parseFloat(product[3].split('$').pop())
  console.log(actualPrice)
  //console.log(product)

  // set the number of tries
  let numTries = 4;


  // get the guess form and guess input
  const guessForm = document.querySelector('form');
  const guessInput = document.querySelector('#userGuess');

  // add event listener to guess form
  guessForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form from submitting

    // get the user's guess
    const userGuess = parseFloat(guessInput.value);
    if (!userGuess) {
      const textchange = document.getElementById("statusmessage");

      textchange.className = "text-black text-center"
      textchange.textContent = "Please enter a number!"
      return;

    }
    // check if user's guess is correct
    const priceDiff = Math.abs(userGuess - actualPrice);
    console.log(priceDiff)

    if (priceDiff <= 20) {
      // redirect to homepage.html
      const textchange = document.getElementById("statusmessage");

      textchange.className = "text-white text-center"
      textchange.textContent = `Correct! Showing next item.`

      setTimeout(scoreincrease, 1500);
      newitem();

    } else {
      // decrement the number of tries
      numTries--;

      // check if user has any tries left
      if (numTries == 3) {
        // show the remaining tries
        const textchange = document.getElementById("statusmessage");

        textchange.className = "text-white text-center"
        textchange.textContent = `Incorrect! You are ${Math.abs(Math.floor((((actualPrice - userGuess) / userGuess) * 100)))} percent off. You have ${numTries} attempts left!`
      } if (numTries == 2) {
        const textchange = document.getElementById("statusmessage");

        textchange.className = "text-white text-center"
        if (userGuess > actualPrice) {

          textchange.textContent = `Incorrect! You are ${Math.abs(Math.floor((((actualPrice - userGuess) / userGuess) * 100)))} percent greater than the actual price. You have ${numTries} attempts left!`

        }
        if (userGuess < actualPrice) {
          textchange.textContent = `Incorrect! You are ${Math.abs(Math.floor((((actualPrice - userGuess) / userGuess) * 100)))} percent less than the actual price. You have ${numTries} attempts left!`

        }
      } if (numTries == 1) {
        const textchange = document.getElementById("statusmessage");

        textchange.className = "text-white text-center"
        if (userGuess > actualPrice) {
          textchange.className = "text-white text-center"
          textchange.textContent = `Incorrect! You are $${Math.abs(actualPrice - userGuess)} dollars above the actual price. This is your last attempt!`
        }
        if (userGuess < actualPrice) {
          textchange.className = "text-white text-center"
          textchange.textContent = `Incorrect! You are $${Math.abs(actualPrice - userGuess)} dollars below the actual price. This is your last attempt!`
        }
      }
      if (numTries == 0) {
        // show the failure message
        textchange.className = "text-white text-center"
        textchange.textContent = `Sorry! That was your last attempt. The actual price was ${actualPrice}. Game over!`

        // redirect to homepage.html
        window.location.href = "gameover.html";
      }

      // clear the guess input
      guessInput.value = '';
    }

  });


})
function newitem() {
  document.querySelector('#userGuess').value = '';
  newProduct();
  var productJson = localStorage.getItem("product");
  var product = JSON.parse(productJson);
  console.log(productJson);

  $('.card-img-top').attr('src', product[4]);
  $('.card-title').text(product[2]);
  $('.card-text').text(product[5]);

  var actualPrice = parseFloat(product[3].split('$').pop())
  console.log(actualPrice)

  // set the correct price
  var actualPrice = parseFloat(product[3].split('$').pop())
  let numTries = 3;

}

function scoreincrease() {
  let highscore = 0;
  let header = document.getElementById('scorebox');
  score = score + 100;
  header.innerText = 'Your Score: ' + score;
  localStorage.setItem('score1', score);
}