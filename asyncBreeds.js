
const fs = require('fs');

const breedDetailsFromFile = function(breed, somefunction) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) somefunction(data);
    else somefunction(data);
  });
  
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

const errorMessage = unknownBreed => {
  console.log('undefined');
}

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function


module.exports = breedDetailsFromFile;