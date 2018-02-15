require("dotenv").config();

var keys = require("./keys");

var dotenv = require("dotenv");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

// You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Include the request npm package (Run "npm install request" in this folder first!)
var request = require("request");

var userRequest = process.argv[2];
var optionTitle = process.argv[3];

if (userRequest === "movie-this"){

}else if (userRequest === "spotify-this-song"){
 
}else if (userRequest === "my-tweets"){

}else if (userRequest === "do-what-it-says") {
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + userRequest + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and get all of the movie information
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Rating: + " + JSON.parse(body).Rated);
    if (JSON.parse(body).Ratings.length > 0) {
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    }
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
});

// Include the request npm package (Run "npm install request" in this folder first!)
var request = require("request");

//twitter 
var params = {screen_name: 'SKaArnold'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//twitter 
var params = {screen_name: 'SKaArnold'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//spotify
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

//fs readFile
var fs = require("fs");

function total(){
  fs.readFile("random.txt", "utf8", function(err,data) {
    if (err) {
        return log.console(err);
    }
  });
}

// console.log(result);
console.log(JSON.stringify(data));