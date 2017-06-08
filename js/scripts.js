//business logic
var vowels = ["a", "e", "i", "o", "u"];

var isVowel = function(letter) {
  for(i = 0; i < vowels.length; i++){
    if(letter === vowels[i]){
        return true;
    }
  }
  return false;
};


var pigLatin = function(inputtedString) {

  var firstLetter = inputtedString.charAt(0);
  var secondLetter = inputtedString.charAt(1);//will return a null string if no second letter
  var thirdLetter = inputtedString.charAt(2);//will return a null string if no third letter
  var pigString = "";

  if (isVowel(firstLetter)) { //all words with vowels will get "way"
    pigString = inputtedString + "way";
  } else if (!isVowel(firstLetter) && isVowel(secondLetter)) { //all words with one consonant will get consonant sliced and added to end and "ay" too.
    pigString = inputtedString.slice(1) + firstLetter + "ay";
  } else if (!isVowel(firstLetter) && !isVowel(secondLetter) && isVowel(thirdLetter)) {
    pigString = inputtedString.slice(2) + firstLetter + secondLetter + "ay";
  } else if (!isVowel(firstLetter) && !isVowel(secondLetter) && !isVowel(thirdLetter)) {
    pigString = inputtedString.slice(3) + firstLetter + secondLetter + thirdLetter + "ay";
  }
  return pigString;
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
