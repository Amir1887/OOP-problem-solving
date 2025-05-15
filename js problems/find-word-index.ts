// find a specific word in an array and get its index

function findWordIndex(words: String[], target: string): number {
    // return words.forEach((word, i) => word === target ? word[i]: 0) word[i] >> return the 1st character in the word, forEach does not return 
    return words.indexOf(target);

}

// solution with for loop 
function findWordIndexLoop(words: String[], target: String): number {
    for(let i = 0; i < words.length; i++) {
        if(words[i] === target) return i;
    }
    return -1;
}






// Real-World Use Cases

// 1. Search Feature in a Messaging App
// To highlight a message that contains a specific word:

const messages = ["Hi", "Meeting at 5", "urgent", "See you soon"];
const keyword = "urgent";
const index = findWordIndex(messages, keyword);

if (index !== -1) {
  console.log(`Found "${keyword}" in message #${index + 1}`);
}

//---------------------------------------------------------
// 2. Form Autocomplete Suggestions
// To detect and highlight where a user-selected keyword came from:
const suggestions = ["apple", "banana", "grape", "orange"];
const selected = "grape";
const indexSuggest = findWordIndex(suggestions, selected);

console.log(`"${selected}" is suggestion #${index}`);


// -------------------------------------------------------
//3. CMS Keyword Detection
// In a content management system, auto-tagging articles:
const tags = ["tech", "health", "finance", "education"];
const word = "finance";

const indexContent = findWordIndex(tags, word);
if (index >= 0) {
  console.log(`Auto-tag: "${word}" found at index ${index}`);
}

