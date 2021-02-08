// the needed varibables

var iframe = document.getElementById("myFrame"); // the element for the iframe to placed  on.
var favorites = JSON.parse(localStorage.getItem("favorite")) || []; // favorites is either a parsed local storage object or an empty array
var html = ""; //empty string
var songs = []; // empty array
var lyricList = []; //empty array
var trackTitle = ""; //empty string
var artistName = ""; //empty string


// we place an event listenter to the document 
document.addEventListener('DOMContentLoaded', function() {
  // once the document is loaded initialize a get request to the deezer api 
    // running the DZ init 
    DZ.init({
        appId  : '8',
        channelUrl : 'https://developers.deezer.com/examples/channel.php',
        player : {
            container : 'player',
            playlist : true,
            width : 450,
            height : 450,
            format:'square',
            onload : playerLoaded,
            
        }
        // returning back a music player 
    });
});


// we create a function

function playerLoaded(){   
  //  this line take the name of the event you want and places callback functions on multiple locations
  // more info on this go to https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/v9.0
  
    DZ.Event.subscribe('current_track', function(arg){
        // In the call back function we store the value of the current track and artist that player is playing. 

        trackTitle = (arg.track.title).toLowerCase();
        artistName = (arg.track.artist.name).toLowerCase();
        
          // and then add an event listenter to to element that has an id of button
             $("#button").on("click",function(){

              // we prevent any propagation and browser defaults 
                event.stopPropagation()
                event.stopImmediatePropagation()
                event.preventDefault();
                
              // we then trigger the function find lyrics and pass the track title and artist name as the arguments 
        findLyrics((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());

        })  
    });
}



// in the find lyrics function we take in two paramaters 
var findLyrics = function(b,a) {

       
  // we will place those results in the array songs 
    songs.splice(0,1,a,b);
    songs.length = 2; // we keep the length of this array at two to prevent unwanted extra data

  // we will create a url variable 
     var queryUrl =
 // sending a get request to api.lyrics.ovh
 "https://api.lyrics.ovh/v1/" +
 //with the value of the artist input
   songs[0] +
   // plus the value of the title input 
   "/" +
   songs[1]
   // .get callback function takes the data we receive 
;
     
    //  using .get we request a get call 
    $.get(
      // with the url variable we just  made 
        queryUrl,
      // our Response will return
      function (data) {

        // lyricList.splice(0,1,data); well splice the data into the first element in the lyricList array 
        lyricList.length = 1; //keeping the array length to one 
        // we then empty both  songs and lyric list arrays
    $(songs).empty();
    $(lyricList).empty();



          // we then add an event listener to the element with an id of output 
        $('#output').html(lyricList[0].lyrics.replace(
          // we will go through our data received by the lyrics api stored in the lyricList Array 
          // and then return a series of strings 
          
          new RegExp("\n", "g"), "<br>"))       
    })        
  }



//  we create a savedTrack function 
function savedTrack(){
  //  starting with a for loop for the length of the favorites variable 
    for (var i = 0; i < favorites.length; i++) {
      // we will add a block of html in the html variable 
    html += `<p>${favorites[i].title} <span>${favorites[i].artist}</span></p>
        <button data-title="${favorites[i].title}"> Get Song </button>`;
    }

    // and then apply this html to the element with the id of previous-search
    $("#previous-search").html(html);

};
//  we will add another eventlistner that is appied to the element with save-track-btn id 
  $("#save-track-btn").on("click", function() {
    // we will  then push the saved data in an object that is stored in the favorites array 
    favorites.push({
      title: trackTitle,
      artist: artistName
    })
    // we will then create convert the object into a string and store it onto the  localStorage
    localStorage.setItem("favorite", JSON.stringify(favorites))
  })
  // we will then call the function 
savedTrack();


