const jsName = "script.js";
const jsVersion = "1.0.0";
// input/ Function
function getInput() {
    var userInput = document.getElementById("inputText");
    var inputText = userInput.value;
    return { 
        inputText : inputText, 
    };
};
// Submit/ Function
function clickedSubmitButton() {

    // log to console
    console.log(`[${jsName}] User clicked submit ... `);
	///// Output
    var outputText = document.getElementById("textOutput");
	// get the input ready for actions
    var fullText = getInput();
    var inputText = fullText.inputText;

    outputText.innerHTML = (
       `<b>${inputText}</b>` 
    );

    // log to console
    console.log(`[${jsName}] Output updated from input values ... `);
};
// mirroring - copy / Function
$("#copyInput").keypress(function () {
  var inputVal = $("#copyInput").val();
  //look for space
  var splitString = inputVal.split(" ");
  //look for length: splitString.length
  //loop through the string
  $.each(splitString, function (key, value) {
    $("#copyDiv").append(
      "<span id='something' class='btn btn-outline-secondary'>" +
        key +
        ": " +
        value +
        "</span>"
    );
  });

$("#copyDiv").html(inputVal).append(splitString.length);
});
// clearOutput / Function
$("#clearOutput").click(function(e){

    // Prevent default
    e.preventDefault();

    // Clear Output & Input Bar
    $("#inputText").val("");
    $("#textOutput").text("");

});
// splitInput / Function
$("#splitInput").keypress(function () {
  var inputVal = $("#splitInput").val();
  //look for spac
  var splitString = inputVal.split("");
  document.getElementById("splitDiv").innerHTML = splitString;
  //$("#splitDiv").html(inputVal).append(splitString.length);
});

