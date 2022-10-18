console.log('***** Music Collection *****')
let collection = [];


function addToCollection(title, artist, yearPublished){
 return collection.push({title, artist, yearPublished})
}

let album= {
  title: this.title,
  artist: this.artist,
  yearPublished: this.yearPublished,
  addToCollection: function(){
    return collection.push(this.title + this.artist + this.yearPublished)
  }
};

addToCollection("In Rainbows", "Radiohead", "2007");
addToCollection("Go Farther In Lightness", "Gang of Youths", "2017");
addToCollection("Hot Fuss", "The Killers", "2004");
addToCollection("Brave Faces Everyone", "Spanish Love Songs", "2020");
addToCollection("RTJ4", "Run The Jewels", "2020");
addToCollection("I Don\'t Live Here Anymore", "The War On Drugs", "2021");
console.log(collection);


function showCollection(array){
  title = album.title;
  artist = album.artist;
  yearPublished = album.yearPublished;
  let total = array.length;
  console.log(total);
  for (i = 0; i < array.length; i++) {
    console.log(array[i].title + " by " + array[i].artist + " published in " + array[i].yearPublished)
  }
};

showCollection(collection);
