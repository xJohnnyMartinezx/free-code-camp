"use strict";
(function(){

//     // Appending Variables to Strings
//
//     // Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
//     // Change code below this line
//     const someAdjective = "cool.";
//     let myStr = "Learning to code is ";
//
//     myStr += someAdjective;
//     console.log(myStr);
//
// //     **********************************
// //     Find the Length of a String
// //     Use the .length property to set lastNameLength to the number of characters in lastName.
//         // Setup
//     let lastNameLength = 0;
//     const lastName = "Lovelace";
//
//         // Only change code below this line
//     lastNameLength = lastName.length;
//     console.log(lastNameLength);
//
//
//     //     **********************************
//     // Use Bracket Notation to Find the First Character in a String
//     // Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
//         // Setup
//     let firstLetterOfLastName = "";
//     const lastName = "Lovelace";
//
//         // Only change code below this line
//     firstLetterOfLastName = lastName[0]; // Change this line
//     console.log(firstLetterOfLastName);
//
//
//     //     **********************************
//     // Understand String Immutability
//     // Correct the assignment to myStr, so it contains the string value of Hello World using the approach shown in the example above.
//     // Setup
//     let myStr = "Jello World";
//
// // Only change code below this line
//     myStr = "Hello World"; // Change this line
//     console.log(myStr);
// // Only change code above this line
//
//
//     //     **********************************
//
//     // Use Bracket Notation to Find the Nth Character in a String
//     // Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
//
//     // Setup
//     const lastName = "Lovelace";
//
//     // Only change code below this line
//     const thirdLetterOfLastName = lastName[2]; // Change this line
//     console.log(thirdLetterOfLastName);
//
//     //     **********************************
//
//     // Use Bracket Notation to Find the Last Character in a String
//     // Use bracket notation to find the last character in the lastName variable.
// // Setup
//     const lastName = "Lovelace";
//
// // Only change code below this line
//     const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
//     console.log(lastLetterOfLastName);
//
//     //     **********************************

    // Use Bracket Notation to Find the Nth-to-Last Character in a String
    // Use bracket notation to find the second-to-last character in the lastName string.

    // Setup
    const lastName = "Lovelace";

// Only change code below this line
    const secondToLastLetterOfLastName = lastName[lastName - 2]; // Change this line
    console.log(secondToLastLetterOfLastName);
    //     **********************************
    // Word Blanks
    // In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
    //
    //     You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
    //     You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.
    //
    //     You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

    const myNoun = "dog";
    const myAdjective = "big";
    const myVerb = "ran";
    const myAdverb = "quickly";

// Only change code below this line
    const wordBlanks = "The " + myNoun + " was very " + myAdjective + " it " + myVerb + " very " + myAdverb + "."; // Change this line
    console.log(wordBlanks);
// Only change code above this line



    //     **********************************



    //     **********************************



    //     **********************************










})();