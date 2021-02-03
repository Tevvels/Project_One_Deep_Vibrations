var plus = $("<button>").text("+")
var i = 0;

plus.on('click',function(){
    if(i > 24){
        i = 24;
    }

    DZ.api('search?q=metallica',function(response){
        console.log(response);
        console.log((response.data[i].duration / 60));
        console.log(response.data[i].title);
        console.log(response.data[i].artist.name);
    
    });
    i++;
})

$("body").append(plus);

var minus = $("<button>").text("-")

minus.on('click',function(){
   
    if(i < 0){
        i = 0;
    }
    DZ.api('search?q=metallica',function(response){
        console.log(response);
        console.log((response.data[i].duration / 60));
        console.log(response.data[i].title);
        console.log(response.data[i].artist.name);
    
    });
    i--;
})

$("body").append(minus);

var random = $("<button>").text("Random")

random.on('click',function(){
   
    if(i < 0){
        i = 0;
    }
    DZ.api('search?q=metallica',function(response){
        console.log(response);
        console.log((response.data[i].duration / 60));
        console.log(response.data[i].title);
        console.log(response.data[i].artist.name);
    
    });

    i = Math.floor(Math.random() * 24)
  
})

$("body").append(random);
var playbutton = $("<button>");
var player = $("<audio autoplay>")
var sources = $('<source>')
playbutton.on('click',function(){
   
    if(i < 0){
        i = 0;
    }
    DZ.api('search?q=metallica',function(response){
        console.log(response);
        console.log((response.data[i].duration / 60));
        console.log(response.data[i].title);
        console.log(response.data[i].artist.name);
        sources.attr("src",response.data[0].preview);
        sources.attr("type","audio/mp3"); 
         
    });

   
  

player.append(sources)
});
$("body").append(player);

$("body").append(playbutton)



