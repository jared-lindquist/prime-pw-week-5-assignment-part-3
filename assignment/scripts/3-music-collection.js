console.log('***** Music Collection *****')
let collection = [];
//let album = {};

function addToCollection(title, artist, yearPublished){
  album = {title, artist, yearPublished}
  collection.push(album)
  return album;
}



addToCollection("In Rainbows", "Radiohead", "2007");
console.log(collection[0]);
addToCollection("Go Farther In Lightness", "Gang of Youths", "2017");
console.log(collection[1]);
addToCollection("Hot Fuss", "The Killers", "2004");
console.log(collection[2]);
addToCollection("Brave Faces Everyone", "Spanish Love Songs", "2020");
console.log(collection[3]);
addToCollection("RTJ4", "Run The Jewels", "2020");
console.log(collection[4]);
addToCollection("I Don\'t Live Here Anymore", "The War On Drugs", "2021");
console.log(collection[5]);
console.log(collection);

//Checking a couple different object logs

// console.log(collection[3].artist);
// console.log(collection[4].yearPublished);


function showCollection(array){
  console.log(array.length);
  for (i = 0; i < array.length; i++){
    console.log(array[i].title + " by " + array[i].artist + " published in " + array[i].yearPublished);
  }
}
showCollection(collection);

//console.log(collection[2].artist);

let results = [];

function findByArtist(collection, artist) {
  results = [];
  for (i = 0; i < collection.length; i++)
    if (collection[i].artist === artist){
      results.push(collection[i]);
      return results;
    } else {
      return [];
    }
}
findByArtist("Queen");
findByArtist("The Killers");
console.log(results);