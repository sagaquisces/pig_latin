//business logic
var vowels = ["a", "e", "i", "o", "u"];


var pigLatin = function(inputtedString) {

  var firstLetter = inputtedString.charAt(0);
  var pigString = inputtedString.slice(1) + firstLetter + "ay"; //consonant case

  alert(pigString);

  vowels.forEach(function(vowel) {
    if (vowel === firstLetter) {
      pigString = inputtedString + "way"; //vowel case
    }
  });
};





//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedString = $("input#string").val();
    var result = pigLatin(inputtedString);

    $(".wordEnglish").text(inputtedString);
    $(".wordPigLatin").text(result);
  });
});
