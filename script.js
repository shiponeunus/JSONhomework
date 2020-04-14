
// let outputElement = document.getElementById('outputElement');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "artist" : "Kanye West",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Ye_album_cover.jpg/220px-Ye_album_cover.jpg",
    "favorite_color" : "black",
    "song" : "Ghost Town",
    "album" : "Ye"
  },
  {
    "artist" : "Pop Smoke",
    "picture_url" : "https://media.pitchfork.com/photos/5e3dec51a42e4e000882e43c/1:1/w_600/Meet%20the%20Woo%20Vol.%202_Pop%20Smoke.jpg",
    "favorite_color" : "black",
    "song" : "Mannequin ft. Lil Tjay",
    "album" : "Meet the Woo 2"
  },
  {
    "artist" : "Duwap Kaine",
    "picture_url" : "https://images.genius.com/32b972b31998ea3958633f51f9fb5c96.800x800x1.png",
    "favorite_color" : "black",
    "song" : "Ferris Wheel",
    "album" : "Bad Kid from the 4"
  },
  {
    "artist" : "Rihanna",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/a/aa/Rihanna_-_Rated_R.png",
    "favorite_color" : "black",
    "song" : "Hard",
    "album" : "Rated R"
  },
  {
    "artist" : "Kodak Black",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/4/4f/ProjectBaby2.jpg",
    "favorite_color" : "black",
    "song" : "Unexplainable",
    "album" : "Project Baby 2"
  },
  {
    "artist" : "Gucci Mane",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/2/28/Gucci_Mane_-_Evil_Genius.jpg",
    "favorite_color" : "black",
    "song" : "By Myself",
    "album" : "Evil Genius"
  },
  {
    "artist" : "A Boogie",
    "picture_url" : "https://pbs.twimg.com/media/EQDEwvUWsAMaGv4.jpg",
    "favorite_color" : "black",
    "song" : "Calm Down ft. Summer Walker",
    "album" : "Artist 2.0"
  },
  {
    "artist" : "Chief Keef",
    "picture_url" : "https://image.mymixtapez.com/albums/190604/cover/0/medium",
    "favorite_color" : "black",
    "song" : "Glatt",
    "album" : "Back From the Dead 3"
  },
  {
    "artist" : "Bjork",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/7/77/Björk-Debut-1993.png",
    "favorite_color" : "black",
    "song" : "Human Behavior",
    "album" : "Debut"
  },
  {
    "artist" : "Drake",
    "picture_url" : "https://www.udiscovermusic.com/wp-content/uploads/2018/09/Drake-Nothing-Was-The-Same-deluxe-album-cover-web-optimised-820.jpg",
    "favorite_color" : "black",
    "song" : "Furthest Thing",
    "album" : "Nothing was the Same"
  },
  {
    "artist" : "6ix9ine",
    "picture_url" : "https://images-na.ssl-images-amazon.com/images/I/817nxzXbEYL._SL1200_.jpg",
    "favorite_color" : "black",
    "song" : "Chocolate",
    "album" : "Day 69"
  },
  {
    "artist" : "Doowap",
    "picture_url" : "https://img.discogs.com/rW4x3IvyjcsvMIp9rscwXJZr22g=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13947582-1564677203-1909.jpeg.jpg",
    "favorite_color" : "black",
    "song" : "Cap Flow ft Lil Uzi",
    "album" : "Cappin' Aint Dead"
  },
  {
    "artist" : "Lil Tjay",
    "picture_url" : "https://s.yimg.com/ny/api/res/1.2/0Crvy21hBFwQexKerOiwaQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/consequence_of_sound_458/a35ee63be4f3c2829d7c1aeef5d9d1a5",
    "favorite_color" : "black",
    "song" : "Top of my Game",
    "album" : "True 2 Myself"
  },
  {
    "artist" : "Kid Cudi",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/c/c5/Kid-cudi-indicud-cover.jpg",
    "favorite_color" : "black",
    "song" : "Immortal",
    "album" : "Indicud"
  },
  {
    "artist" : "Lancey Foux",
    "picture_url" : "https://images.genius.com/a56199ad532f718e4d756721f9129b08.1000x1000x1.png",
    "favorite_color" : "black",
    "song" : "Say Nun, Aint Nun",
    "album" : "Friend or Foux"
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}


function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = incomingJSON['artist'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  let newContentSong = document.createElement("H4");
  newContentSong.classList.add('songTitle');
  newContentSong.innerHTML = incomingJSON['song'];
  newContentElement.appendChild(newContentSong);

  let newContentAlbum = document.createElement("H5");
  newContentAlbum.classList.add('songTitle');
  newContentAlbum.innerHTML = incomingJSON['album'];
  newContentElement.appendChild(newContentAlbum);
  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}
