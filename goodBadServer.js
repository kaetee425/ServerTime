// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet

var http = require("http")

// server GOOD
var goodPORT = process.env.goodPORT || 7000

function handleRequest(request, response) {
	response.end("Wow, you are so beautiful!");
};

var goodServer = http.createServer(handleRequest);

goodServer.listen(goodPORT, function(){
	console.log("Listening to port: ", goodPORT);
});


// server BAD
var badPORT = process.env.badPORT || 7500

function handleRequest2(request, response) {
	response.end("Wow, can you be any uglier? Ah! Cover yourself");
};

var badServer = http.createServer(handleRequest2);

badServer.listen(badPORT, function(){
	console.log("Listening to port: ", badPORT);
});


