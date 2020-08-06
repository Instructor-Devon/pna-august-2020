function acronyms(word) {
    // create a function that, given a string, returns the string’s acronym (first letters only, capitalized).

    // Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW".  
    // Given "Live from New York, it's Saturday Night!", return "LFNY,ISN".

    // identify "words"
        // split on spaces
    var words = word.split(" ");
    // once words are identified, create a string with only the capital letter of each word
    // challenge: console log just the first character of each word in words DONE
    // loop through each word in the array(words)

    var output = ""
    for(var i=0; i<words.length; i++) {
        // make sure there is actually an index 0 here
        if(words[i][0]) {
            output += words[i][0].toUpperCase();
        }
    }
    return output;

}
var result = acronyms("Live from New York, it's Saturday Night!");
console.log(result);