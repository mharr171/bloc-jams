var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [{
      title: 'Blue',
      duration: '4:26'
    },
    {
      title: 'Green',
      duration: '3:14'
    },
    {
      title: 'Red',
      duration: '5:01'
    },
    {
      title: 'Pink',
      duration: '3:21'
    },
    {
      title: 'Magenta',
      duration: '2:15'
    }
  ]
};

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [{
      title: 'Hello, Operator?',
      duration: '1:01'
    },
    {
      title: 'Ring, ring, ring',
      duration: '5:01'
    },
    {
      title: 'Fits in your pocket',
      duration: '3:21'
    },
    {
      title: 'Can you hear me now?',
      duration: '3:14'
    },
    {
      title: 'Wrong phone number',
      duration: '2:15'
    }
  ]
};

var albumEinstein = {
  title: 'The Science',
  artist: 'Albert Einstein',
  label: 'Calculo',
  year: '1921',
  albumArtUrl: 'assets/images/album_covers/18.png',
  songs: [{
      title: 'Pie',
      duration: '3:14'
    },
    {
      title: 'Golden',
      duration: '1:37'
    },
    {
      title: 'E Equals',
      duration: '3:12'
    },
    {
      title: 'MC',
      duration: '2:54'
    },
    {
      title: 'Squared',
      duration: '3:37'
    }
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
    '<tr class="album-view-song-item">' +
    '  <td class="song-item-number">' + songNumber + '</td>' +
    '  <td class="song-item-title">' + songName + '</td>' +
    '  <td class="song-item-duration">' + songLength + '</td>' +
    '</tr>';

  return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
  // #1

  // #2
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  // #3
  albumSongList.innerHTML = '';

  // #4
  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

window.onload = function() {
  setCurrentAlbum(albumPicasso);

  var albums = [albumPicasso, albumMarconi, albumEinstein];
  var index = 1;
  albumImage.addEventListener('click', function(event) {
    setCurrentAlbum(albums[index]);
    index++;
    if (index === albums.length)
      index = 0;
  });
  //document.getElementsById('album-cover-art')[0].addEventListener('click', switchAlbum);
};


//---------------------------------------------------

// var switchAlbum = function() {
//   var currentAlbum = document.getElementsById('album-view-title')[0];
//
//   //if (currentAlbum.value === 'The Colors'){
//   if (currentAlbum === 'The Colors'){
//     setCurrentAlbum(albumMarconi);
//   } else if (currentAlbum === 'The Telephone'){
//     setCurrentAlbum(albumEinstein);
//   } else (currentAlbum === 'The Science'){
//     setCurrentAlbum(albumPicasso);
//   }
//
// }

//document.getElementsById('album-cover-art')[0].addEventListener('click', switchAlbum);
