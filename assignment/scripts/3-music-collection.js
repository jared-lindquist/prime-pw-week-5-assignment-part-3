console.log('***** Music Collection *****')
let collection = [];
let album = {};

function addToCollection(title, artist, yearPublished){
  let album = {title, artist, yearPublished}
  collection.push(album)
  return album;
}



addToCollection("In Rainbows", "Radiohead", "2007");
addToCollection("Go Farther In Lightness", "Gang of Youths", "2017");
addToCollection("Hot Fuss", "The Killers", "2004");
addToCollection("Brave Faces Everyone", "Spanish Love Songs", "2020");
addToCollection("RTJ4", "Run The Jewels", "2020");
addToCollection("I Don\'t Live Here Anymore", "The War On Drugs", "2021");
console.log(collection);

function showCollection(array){
  console.log(array.length);
  for (i = 0; i < array.length; i++){
    console.log(array[i].title + " by " + array[i].artist + " published in " + array[i].yearPublished);
  }
}
showCollection(collection);

let newList = [];

function findByArtist(artist){
  let chars = collection[artist];
  for (let i = 0; i < collection.length; i++) {
    if (chars === "") {
     return newList.push(chars);
  } else {
    return [];
  }
}
}
findByArtist("Radiohead");
console.log(newList);