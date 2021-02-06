



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
    event.stopPropagation()
    DZ.Event.subscribe('current_track', function(arg){
        // call the event_listener_append function adding multiple arguments 
        // findLyrics('current_track', arg.index, arg.track.title, arg.track.album.title);

        
             $("#button").on("click",function(){
        console.log((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());
        findLyrics((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());
      
  
    })


      
    });

     



}
var songs = [];
var findLyrics = function(b,a) {
    // get is a short hand function of ajax.
    var result = songs.filter(song => songs.length)
    songs.splice(0,1,a,b);
    console.log(a,b)
    songs.push(a,b);
   
    $.get(
      // sending a get request to api.lyrics.ovh
      "https://api.lyrics.ovh/v1/" +
      //with the value of the artist input
        songs[0] +
        // plus the value of the title input 
        "/" +
        songs[1],
        // .get callback function takes the data we receive 
      function (data) {
        console.log(songs,data);

        // and displays results int he element that has an id output 
        
    
        document.getElementById("output").innerHTML = data.lyrics.replace(
          // this function replaces '/n' with g  
          new RegExp("\n", "g"),
          // and then inserts a break element 
          "<br>"
        );
      }
    );
  }
var iframe = document.getElementById("myFrame");


  
