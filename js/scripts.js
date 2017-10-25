// business logic
function translator(english) {

  english = english.split('');
  console.log(english);
// add way & ay
  for (var index = 0; index < english.length; index += 1){
    if (english[index].charAt(english[index].charAt(0)) == "a" || english[index].charAt(english[index].charAt(0)) == "e" || english[index].charAt(english[index].charAt(0)) == "i" || english[index].charAt(english[index].charAt(0)) == "o" || english[index].charAt(english[index].charAt(0)) =="u") {
      english[index] = english[index] + "way";
    }
      else {
      english[index] = english[index].concat(english[index].charAt(0));
      english[index] = english[index].slice(1);
      english[index] = english[index] + "ay";
    }
  }
  english = english.join('');
  return english;
    // convert back to string
}


// UI logic
$(document).ready(function(){
    $("#some-form").submit(function(event){
    event.preventDefault();
    $("#results").text(translator($("#english").val()));
  });
});
