var keySequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var userInput = [];

function checkKeySequence() {
  if (userInput.join(',') === keySequence.join(',')) {
    var hiddenURL = "https://www.your-website.com/target-url";
    
    window.location.href = hiddenURL;
  }
}

document.addEventListener('keydown', function(event) {
  var keyCode = event.keyCode || event.which;

  userInput.push(keyCode);

  if (userInput.length > keySequence.length) {
    userInput.shift();
  }

  checkKeySequence();
});
