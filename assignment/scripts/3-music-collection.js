console.log('***** Music Collection *****')

let collection = [];

// addToCollection function

function addToCollection(title, artist, yearPublished){
  album = {
    title: title, 
    artist: artist, 
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}


//Adding albums to collection using addToCollection function
//logging each entry

addToCollection("In Rainbows", "Radiohead", "2007");
console.log(collection[0]);
addToCollection("Go Farther In Lightness", "Gang of Youths", "2017");
console.log(collection[1]);
addToCollection("Hot Fuss", "The Killers", "2004");
console.log(collection[2]);
addToCollection("Brave Faces Everyone", "Spanish Love Songs", "2020");
console.log(collection[3]);
addToCollection("Lost In The Dream", "The War On Drugs", "2014");
console.log(collection[4]);
addToCollection("I Don\'t Live Here Anymore", "The War On Drugs", "2021");
console.log(collection[5]);
console.log(collection);

//Checking a couple different object keys

 console.log(collection[3].artist);
 console.log(collection[4].yearPublished);


//Show collection function

function showCollection(array){
  console.log(array.length);
  for (i = 0; i < array.length; i++){
    console.log(array[i].title + " by " + array[i].artist + " published in " + array[i].yearPublished);
  }
}
//Testing showCollection function

showCollection(collection);

//Find by artist function:

function findByArtist(param1) {
  const results = [];
  for (i =0; i < collection.length; i++){
    if (collection[i].artist === param1){
      results.push(collection[i]);
    } 
  }   
  return results;
}

//Testing findByArtist function

console.log(findByArtist("The Killers"));
console.log(findByArtist("Queen"));
console.log(findByArtist("The War On Drugs"));