document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".cardWrapper2");

  var generateRandomColor = function () {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  cards.forEach(function (card) {
    var backOfCard = card.querySelector(".cardRandom2"); // Get the "back" of the card
    var svgPath = card.querySelector(".svgPathColor path");
    var colorSquare = backOfCard.querySelector(".colorSquare");
    var hexCodeElement = backOfCard.querySelector(".hexCode");
    var colorChangeEnabled = false; // Flag to track color change state for this card

    backOfCard.addEventListener("click", function () {
      // Listen for click on the "back" of the card
      if (colorChangeEnabled) {
        // Disable color change for this card
        colorChangeEnabled = false;
        backOfCard.style.opacity = 0; // Hide the "back" of the card
      } else {
        // Enable color change for this card
        colorChangeEnabled = true;
        var newColor = generateRandomColor();

        // Update the fill color of the SVG path
        var svgPath = document.querySelector(".svgPathColor");
        if (svgPath) {
          svgPath.style.fill = newColor;
        }

        // Update the background color of the body
        document.body.style.backgroundColor = newColor;
        backOfCard.style.opacity = 1; // Show the "back" of the card

         // Update the background color of the color square
         colorSquare.style.backgroundColor = newColor;

         // Update the hex code element
         hexCodeElement.textContent = newColor;
 
      }
    });
  });
});

//Contact Form javascript below//
