function make_album(artist:string, title:string, tracks?:number){
    interface album {
        artist:string
        title:string
        tracks?:number
    }
    const album:album = {
        artist:artist,
        title:title
    }
    if(tracks !== undefined){
        album.tracks = tracks
    }
    return album
}
console.log(make_album("Artist1","Title1"));
console.log(make_album("Artist2","Title2",4));
console.log(make_album("Artist3","Title3",7));
