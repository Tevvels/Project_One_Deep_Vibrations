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

var iframebutton = $("<button>").text("iframeplayer")
var i = 0;

iframebutton.on('click',function(){

    i++
    var iframe = $("<iframe>").attr("src","https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=EF5466&layout=&size=medium&type=artist&id="+ i + "&app_id=0").attr("width","300").attr("height","300").attr("scrolling","no").attr("frameborder","0").attr("allowTransparency","true");
    
    $("body").append(iframe);
  
})

$("body").append(iframebutton);





