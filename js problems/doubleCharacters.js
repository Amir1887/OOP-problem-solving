// double each character of a given word
function doubleCharacters(word) {
    return word.split('').map(ch => ch + ch).join('');
}



// 1. Animated Text in a UI
// To exaggerate letters for a visual effect:
const word = "hello";
const doubled = doubleCharacters(word); // "hheelllloo"
// Use in animation or styled component
console.log({doubled: doubled});


// ------------------------------------------------

// 2. CAPTCHA / Obfuscation
// A fun way to alter text to prevent basic scraping:
const username = "admin";
const captchaString = doubleCharacters(username); // "aaddmmiinn"

// ------------------------------------------------


// 3. Text Transformation Filter
// As part of a silly filter like "echo" text:
const message = "chat";
const echoed = doubleCharacters(message); // "cchhaatt"

// ------------------------------------------------

// solve the "double each character" task using a **for...of** loop.
function doubleCharactersFor(word) {
    let doubled = '';
    for (let i = 0; i < word.length; i++){
        doubled += word[i] + word[i]
    }
    return doubled
}

const messageefor = "chat";
const echoedUsingFor = doubleCharactersFor(messageefor); // "cchhaatt"
console.log({echoedUsingFor: echoedUsingFor}); // {echoedUsingFor: 'undefinedcchhaatt'} ????


function doubleCharacters(word) {
    let result = '';
    for (const char of word) {
      result += char + char;
    }
    return result;
  }
  
