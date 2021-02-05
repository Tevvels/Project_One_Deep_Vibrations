// DZ.api('/track/3135556', function(response){
//     console.log("name of user", response);
// })

// var plus = $("<button>").text("+")
// var i = 1000;
// plus.on('click',function(){


//     DZ.api('radio/42222/tracks',function(response){
//         console.log(i,response);

        
        
//     });
//     i++;
// })

// $("body").append(plus);

// var minus = $("<button>").text("-")

// minus.on('click',function(){
   
//     if(i < 0){
//         i = 0;
//     }
//     DZ.api('search?q=led+zeppelin',function(response){
//         console.log(i,response);

    
//     });
//     i--;
// })

// $("body").append(minus);

// var random = $("<button>").text("Random")

// random.on('click',function(){
   
//     if(i < 0){
//         i = 0;
//     }
//     DZ.api('tracks/' + i,function(response){
//         console.log(response);

    
//     });
//     DZ.init({
//         appId:'8',
//         channelUrl:'file:///C:/Users/chris/OneDrive/desktop/DU_Projects/Project_One_Deep_Vibrations/index.html',
//         player: {
//             container: 'player',
// 			width : 300,
// 			height : 300,
// 			format : 'square',
//             onload: function(){
//                 console.log("DZ.Player is ready", response);
//             }
//         }
//     });

//     i = Math.floor(Math.random() * 24)
  
// })

// $("body").append(random);

// var iframebutton = $("<button>").text("iframeplayer")
// var i = 0;

// iframebutton.on('click',function(){

//     i++
//     var iframe = $("<iframe>").attr("src","https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=EF5466&layout=&size=medium&type=radio&id=radio-42222 &app_id=0").attr("width","300").attr("height","300").attr("scrolling","no").attr("frameborder","0").attr("allowTransparency","true");
    
//     $("body").append(iframe);
  
// })

// $("body").append(iframebutton);




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
            onload : playerLoaded
        }
    });
});


function playerLoaded(){
    DZ.Event.subscribe('current_track', function(arg){
        // call the event_listener_append function adding multiple arguments 
        // findLyrics('current_track', arg.index, arg.track.title, arg.track.album.title);
        $("#button").on("click",function(){
            console.log((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());
            findLyrics((arg.track.title).toLowerCase(),(arg.track.artist.name).toLowerCase());

      
        })
      
    });

}
var findLyrics = function(b,a) {
    // get is a short hand function of ajax.
    console.log(a,b)
    $.get(
      // sending a get request to api.lyrics.ovh
      "https://api.lyrics.ovh/v1/" +
      //with the value of the artist input
        a +
        // plus the value of the title input 
        "/" +
        b,
        // .get callback function takes the data we receive 
      function (data) {
          console.log(data);
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


  
