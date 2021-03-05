/*
Purpose: Randomly plays youtube video from a short array of songs w/o repeating 
*/

window.onload = function() {
  var button = document.querySelector('button');
  var iframe = document.getElementById('player');
  var para = document.getElementById('text');
  var noSongs = document.getElementById('noSongs');

  //youtube url base
  var url;
  //array of songs to be played
  var songs = [
    "RmYCOm4ehKs",
    "aHIJnEt21o4",
    "h0w5g0p9RsM",
    "oDn4eKyhSH4",
    "oh64haEP9g8",
    "SjVyYFagYJM",
    "sHatfoYEQo0",
    "e8WoWk4b3D0",
    "UO-oXdQ-b7I",
    "7jeluOrjZOg",
  ];
  //array of played songs
  var array = [];
  var random;
  //creates URL for random song that has not been played yet
  function getURL() {
    url = "https://www.youtube.com/embed/";
    random = Math.floor(Math.random() * 10);
    //check if random # is in the array
    while(array.includes(random) && array.length<10){
      random = Math.floor(Math.random() * 10);
    }
    if(array.length !=10){
      //add new number to array
      array.push(random);
      //change url
      url += songs[random];
      
      //output test
      console.log(random);
      console.log(songs[random]);

      //change display after 1st click
      if(array.length > 0){
        iframe.style.display = "block";
      }
    }else{
    //show message/hide video player if reached end of song list{
      button.style.display = "none";
      iframe.style.display = "none";
      noSongs.style.display = "block";
    }
  }
  //change url of iframe's src attribute
  function changeSong(){
    iframe.setAttribute("src", url);
    //change display area
    para.style.display = "none";
  }

button.addEventListener('click', getURL);
button.addEventListener('click', changeSong);

}
