//business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

var isLetter = function (char) {
	var chCode = char.charCodeAt(0);
  if (chCode>=65 && chCode<=90 || chCode>=97 && chCode<=122) {
    return true;
  } else {
  	return false;
  }
}

var isVowel = function(letter) {
  for(i = 0; i < vowels.length; i++){
    if(letter === vowels[i]){
        return true;
    }
  }
  return false;
};


var pigLatin = function(s) {

  var firstLetter = s.charAt(0);
  var secondLetter = s.charAt(1);//will return a null string if no second letter
  var thirdLetter = s.charAt(2);//will return a null string if no third letter
  var pigString = "";

	if (!isLetter(firstLetter)) {
		return s;
	} else if (isVowel(firstLetter)) { //all words with vowels will get "way"
    pigString = s + "way";
  } else if (firstLetter === "q" && secondLetter === "u") {
    pigString = s.slice(2) + "quay";
  } else if (secondLetter === "q" && thirdLetter === "u") {
    pigString = s.slice(3) + firstLetter + "quay";
  } else if (!isVowel(firstLetter) && isVowel(secondLetter)) { //all words with one consonant will get consonant sliced and added to end and "ay" too.
    pigString = s.slice(1) + firstLetter + "ay";
  } else if (!isVowel(firstLetter) && !isVowel(secondLetter) && isVowel(thirdLetter)) {
    pigString = s.slice(2) + firstLetter + secondLetter + "ay";
  } else if (!isVowel(firstLetter) && !isVowel(secondLetter) && !isVowel(thirdLetter)) {
    pigString = s.slice(3) + firstLetter + secondLetter + thirdLetter + "ay";
  }
  return pigString;
};

var piggify = function(s) {

	arrayedString = s.split("");
	tempString="";
	var arraySentence = [];

	for (i=0;i<arrayedString.length;i++) {

		tempString+=arrayedString[i];
		if (i === arrayedString.length-1 || (isLetter(arrayedString[i]) !== isLetter(arrayedString[i+1]))) {

			arraySentence.push(tempString);
			tempString="";
		}
	}

	var i;

	for (i=0; i<arraySentence.length; i+=2) {
		arraySentence[i] = pigLatin(arraySentence[i]);
	}

	return arraySentence.join("");


};



//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedString = $("input#string").val();

		var resultString = piggify(inputtedString);

    $(".stringEnglish").text(inputtedString);
    $(".stringPigLatin").text(resultString);
  });
});
