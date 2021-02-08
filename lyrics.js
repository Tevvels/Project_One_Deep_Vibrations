$(document).ready(function () {



var button = document.getElementById("search");
var songName = document.getElementById("title");
var artistName = document.getElementById("artist");
var lyricsDisplay = document.getElementById("output");

// var previousSearch = JSON.parse(localStorage.getItem("song")) || [];



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
        songName: songName.value.trim(),
        artistName: artistName.value.trim()
    };
    localStorage.setItem("lastListen", JSON.stringify(lastListen));
}      

function renderSongName () {
    var lastPlayed = JSON.parse(localStorage.getItem("lastListen"));

    if (lastPlayed !==null) {
        document.getElementById("saved-artist").innerHTML = lastPlayed.artistName;
        document.getElementById("saved-song").innerHTML = lastPlayed.songName;
    }else {
        return;
    }
}

button.addEventListener("click", function(event) {
    event.preventDefault();
    findLyrics();
    saveSongName();
    renderSongName();
});

function init() {
    renderSongName();
    
}
init();


// function renderSearchHistory() {
//   var previousSearch = JSON.parse(localStorage.getItem(""))
// historyEl.innerHTML = "";
// for (let i=0; i<searchHistory.length; i++)





})