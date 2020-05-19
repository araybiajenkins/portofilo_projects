$('#newJoke').click(function() {
$.getJSON('https://official-joke-api.appspot.com/random_joke', function(data){
var ourJokes = data;
console.log(ourJokes.setup)
console.log(ourJokes.punchline)
$("#jokeBox").html("\"" + ourJokes.setup + "\"<br>" + "\"" + ourJokes.punchline + "\"");

})
});