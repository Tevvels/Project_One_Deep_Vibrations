var iframe = document.getElementById("myFrame");
var favorites = JSON.parse(localStorage.getItem("favorite")) || [];
var html = "";
var songs = [];
var lyricList = [];

document.addEventListener('DOMContentLoaded', function() {
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
    });
});

function playerLoaded(){   
    DZ.Event.subscribe('current_track', function(arg){
        trackTitle = (arg.track.title).toLowerCase();
        artistName = (arg.track.artist.name).toLowerCase();
        console.log(arg);
        
             $("#button").on("click",function(){

                event.stopPropagation()
                event.stopImmediatePropagation()
                event.preventDefault();
                
        console.log((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());

        findLyrics((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());

        })  
    });
}




var findLyrics = function(b,a) {
    // get is a short hand function of ajax.

        
    // var result = songs.filter(song => songs.length)
    songs.splice(0,1,a,b);
    songs.length = 2;
     console.log(songs);

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
     
     
    $.get(
        queryUrl,
     
      function (data) {
        // console.log(songs,data);
        lyricList.splice(0,1,data);
        lyricList.length = 1;
        console.log(lyricList)
    $(songs).empty();
    $(lyricList).empty();
    console.log(songs)




        // and displays results int he element that has an id output 
        console.log(
            "https://api.lyrics.ovh/v1/" +
            //with the value of the artist input
              songs[0] +
              // plus the value of the title input 
              "/" +
              songs[1],
              // .get callback function takes the data we receive
               )
    
        $('#output').html(lyricList[0].lyrics.replace(
          new RegExp("\n", "g"), "<br>"))

           
        })
    

        
  }




function savedTrack(){
    for (var i = 0; i < favorites.length; i++) {
    html += `<p>${favorites[i].title} <span>${favorites[i].artist}</span></p>
        <button data-title="${favorites[i].title}"> Get Song </button>`;
    }

    $("#previous-search").html(html);




};






var trackTitle = "";
var artistName = "";

  $("#save-track-btn").on("click", function() {
    var favorites = JSON.parse(localStorage.getItem("favorite")) || []
    favorites.push({
      title: trackTitle,
      artist: artistName
    })
    localStorage.setItem("favorite", JSON.stringify(favorites))
  })
savedTrack();


var favorites = JSON.parse(localStorage.getItem("favorite")) || [];

var html = "";
for (var i = 0; i < favorites.length; i++) {
  html += `<div style="background-color: #F5F5F5;" class ="song" > <h5  >${favorites[i].title}</h5> <div>${favorites[i].artist}</div>
      <button data-title="${favorites[i].title}"> Get Song </button></div>`;
  $("#previous-search").html(html);
}

$("#previous-search").html(html);

$("#data-title").on("click", function () {
  var dataTitle = $(this).attr("data-title");
});