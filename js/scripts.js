//business logic

var pigLatin = function(inputtedString) {
  return false;

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
