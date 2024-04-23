"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "Title1"));
console.log(make_album("Artist2", "Title2", 4));
console.log(make_album("Artist3", "Title3", 7));
