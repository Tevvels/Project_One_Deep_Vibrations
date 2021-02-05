console.log("hello")

var button = document.getElementById("search");
var songName = document.getElementById("title");
var artistName = document.getElementById("artist");
var lyricsDisplay = document.getElementById("output");

button.addEventListener("click", function(event) {
    event.preventDefault();
    findLyrics();
})


function findLyrics() {
        $.get(
          "https://api.lyrics.ovh/v1/" +
            artistName.value +
            "/" +
            songName.value,


          function (data) {
            lyricsDisplay.innerHTML = data.lyrics.replace(
              new RegExp("\n", "g"),
              "<br>"
            );
          }
        );
      }


function saveSongName () {
    var lastListen = {
        songName: songName.value,
        artistName: artistName.value
    };
    localStorage.setItem("lastListen", JSON.stringify(lastListen));
}      

function renderSongName () {
    var lastPlayed = JSON.parse(localStorage.getItem("lastListen"));

    if (lastPlayed !==null) {
        document.getElementById("by").innerHTML = lastPlayed.artistName;
        document.getElementById("song").innerHTML = lastPlayed.songName;
    }else {
        return;
    }
}

function init() {
    renderSongName();
}
init();