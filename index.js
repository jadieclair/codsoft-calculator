// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the input element with the class "value"
  var screen = document.querySelector(".value");

  // Get all elements with the class "num" and store them in the "buttons" variable
  var buttons = document.querySelectorAll(".num");

  // Iterate through each button using a for loop
  for (var i = 0; i < buttons.length; i++) {
    // Add a click event listener to each button
    buttons[i].addEventListener("click", function (e) {
      // Get the text content of the clicked button
      var buttonText = e.target.innerText;

      // Check the button text and perform corresponding actions
      if (buttonText === "c") {
        // If 'c' is clicked, clear the screen
        screen.value = "";
      } else if (buttonText === "=") {
        // If '=' is clicked, evaluate the expression using the 'eval' function
        screen.value = eval(screen.value);
      } else {
        // For other buttons, append their text to the screen value
        screen.value += buttonText;
      }
    });
  }
});

/*Event Listeners: The code uses addEventListener to attach a click event listener to each button, allowing it to respond to user input.

If-Else Statements: There are if-else statements to check the text content of the clicked button (buttonText). These statements determine whether to clear the screen, evaluate the expression, or append the button's text to the screen.

Operators: The code uses the eval function to handle mathematical operators. When the "=" button is clicked, the expression entered in the screen is evaluated using the eval function.

Loops: The code uses a for loop to iterate through all elements with the class "num" and attach a click event listener to each one. This helps avoid duplicating code for each button and makes the code more efficient */
