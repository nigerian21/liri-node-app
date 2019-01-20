
require("dotenv").config();
const keys = require('./keys');
const Spotify = require ('node-spotify-api');
const request = require ('request');
const moment = require ('moment');
const spotify = new Spotify(keys.spotify);
var fs = require ("fs"); 

var nodeArgs = process.argv;

var userInput = "";
var nextUserInput = "";

var i = 3; 
while (i < nodeArgs.length)
{ i++
    }

  
    if (i > 3 && i < nodeArgs.length) {
        userInput = userInput + "%20"+ nodeArgs[i];
    }
    
    else {
    }
    console.log(userInput)


for (var i = 3; i < nodeArgs.length; i++) {
    nextUserInput = userInput.replace(/%20/g, " ");
}

var userCommand = process.argv[2];
console.log(userCommand);
console.log(process.argv);
Liri();
function Liri() 

    switch (userCommand) {
        case "concert-this":

            fs.appendFile("log.txt", nextUserInput + "\n----------------\n", function (errs) {
                if (err) {
                    console.log("something is not quite right");
                };
            });

            
            var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
            request(queryURL, function (error, response, body) {
                if (error) {
                    console.log("something not right");
                    var dataInfo = JSON.parse(body);
                    for (var i = 0; i < DataInfo.length; i++) {
                        console.log("Venue: " + DataInfo[i].venue.name);
                      
                        fs.appendFile("log.txt", "Venue: " + DataInfo[i].venue.name + "\n", function (error) {
                            if (err) {
                                console.log("something not right");
                            };
                        });
                        if (DataInfo[i].venue.region == "") {
                            console.log("City: " + DataInfo[i].venue.city)
                            Console.log ("Country" + DataInfo[i].venue.country)
                            fs.appendFile("log.txt", "Location: " + DataInfo[i].venue.city)
                            fs.appendFile("log.txt", "Country" + DataInfo[i].venue.country)
                        , function (error) {
                                if (error) {
                                    console.log(error);
                                };
                            

                        
                        {
                            console.log("City: " + DataInfo[i].venue.city);
                             console.log("Region" + DataInfo[i].venue.region);
                             console.log("Country" + DataInfo[i].venue.country);
                            fs.appendFile("log.txt", "Location: " + DataInfo[i].venue.city);
                            fs.appendFile("log.txt",  " region" + DataInfo[i].venue.region);
                            fs.appendFile("log.txt" , "Country:" + DataInfo[i].venue.country); 
                             

                        var date = DataInfo[i].datetime;
                        date = moment(date).format("MM/DD/YYYY");
                        console.log("Date: " + date)
                        fs.appendFile("log.txt", "Date: " + date)
                        console.log("---------------")
                        , function (err) {
                            if (err) {
                                console.log("something is not right");
                            };
                        }
                        console.log("----------------")
                    }
                
            

            break;
        "spotify-this-song:"
        console.log("here");
            if (!userInput) {
                userInput = "The%20Sign";
                nextUserInput = userInput.replace(/%20/g, " ");

            }


            fs.appendFileSync("log.txt", nextUserInput + "\n----------------\n",
             function (err) {
                if (err) {
                    console.log("something is not right");
                };
            })

            console.log(spotify);
            spotify.search({

                type: "track",
                query: userInput
            }, 
            function (err, DataInfo) {
                if (err) {
                    console.log("Error")
                }
                var DataInfo = DataInfo.tracks.items
  
                i = 0; 
                while (i < DataInfo.length)
                { i++;}
                 {
                    let albumObject = DataInfo[i].album;
                    let trackName = DataInfo[i].name
                    let preview = DataInfo[i].preview_url
                    let artistsDataInfo = albumObject.artists
                      e = 0; 
                      while (e < artistsDataInfo.length)
                       (e++) 
                        {
                        console.log("Artist: " + artistsDataInfo[e].name)
                        console.log("Song Name: " + trackName)
                        console.log("Preview of Song: " + preview)
                        console.log("Album Name: " + albumObject.name)
                        console.log("----------------")
                        fs.appendFile("log.txt", "Artist: " + artistsDataInfo[e].name)
                        fs.appendFile("log.txt", "Song Name:: " + trackName)
                        fs.appendFile("log.txt", "Artist: " + preview) 
                        fs.appendFile("log.txt", "Artist: " + albumObject.name)
                        fs.appendFile("log.txt", "Artist: " + artistsDataInfo[j].name)
             "movie-this:"
             //some code used from devans1913
            if (!userInput) {
                userInput = "Mr%20Nobody";
                nextUserInput = userInput.replace(/%20/g, " ");
            }

            fs.appendFile("log.txt", nextUserInput)
            console.log("\n----------------\n"), 
            function (err) {
                if (err) {
                    console.log("something not quite right");
                };
            

         var queryURL = "https://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy"
            request(queryURL, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var DataInfo = JSON.parse(body);
                    console.log("Title: " + DataInfo.Title)
                    console.log("Release Year: " + DataInfo.Year)
                    console.log("OMDB Rating: " + DataInfo.Ratings[0].Value)
                    console.log("Rating: " + DataInfo.Ratings[1].Value)
                    console.log("Country: " + DataInfo.Country)
                    console.log("Language: " + DataInfo.Language)
                    console.log("Plot: " + DataInfo.Plot)
                    console.log("Actors: " + DataInfo.Actors)

                    fs.appendFile("log.txt", "Title: " + DataInfo.year);
                    fs.appendFile("log.txt", "Title: " + DataInfo.Ratings);
                    fs.appendFile("log.txt", "Title: " + DataInfo.country);
                    fs.appendFile("log.txt", "Title: " + DataInfo.Language);
                    fs.appendFile("log.txt", "Title: " + DataInfo.Plot);
                    fs.appendFile("log.txt", "Title: " + DataInfo.Actors);
                        

        if (userCommand == "do-what-it-says") {
            var fs = require("fs")

        
            fs.readFile("random.txt", "utf8", function (err, DataInfo) {
                if (err) {
                    return console.log("Something not quite right")
                }
                var textArr = DataInfo.split(",");
                userCommand = textArr[0];
                userInput = textArr[1];
                nextUserInput = userInput.replace(/%20/g, " ");
                Liri();
            })
        };
    };
