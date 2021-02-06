



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

  
        
        // call the event_listener_append function adding multiple arguments 
        // findLyrics('current_track', arg.index, arg.track.title, arg.track.album.title);

        
             $("#button").on("click",function(){

                event.stopPropagation()
                event.stopImmediatePropagation()
                event.preventDefault();
        console.log((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());
        findLyrics((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());
      
  
    })


      
    });

     



}
var songs = [];
var lyricList = [];
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
var iframe = document.getElementById("myFrame");


  
