// Assuming that this snippet of code is inserted somewhere in a bigger program
// Does not run stand alone, need to be added to another 
// Written in and for JavaScript

// Checks if a passed in param "line" is palindrome
// Ignores capitalization and removes special characters
// Returns true if line is palindrome

function somename(line) {

    let regex = /[^A-Za-z0-9]/g; // Regex for non alpha-numeric characters

    // Modify line into a string of alpha-numeric characters
    let modLine = line.toLowerCase().replace(regex, ''); 

    // Reverses modified line 
    let revLine = modLine.split('').reverse().join('');

    return modLine === revLine;
}


