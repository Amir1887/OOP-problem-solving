// Repeating a string a specific number of times has several real-world applications, such as 
// formatting output, creating text-based patterns, or generating repeated content in UI components.

// String.prototype.repeat()
function repeatString(str, n) {
    if(!typeof str === 'string' || n <= 0) return '';
    return str.repeat(n);
}

//Real-World Use Cases
// a) Generating a Loading Animation

const dotAnimation = repeatString(".", 3);
console.log(`Loading${dotAnimation}`); // Output: Loading...


// b) Creating Indentation for Console Output
const indent = repeatString("  ", 4);
console.log(`${indent}This is an indented message`); 
// Output:         This is an indented message


//c) Displaying Rating Stars
const rating = 4;
const stars = repeatString("★", rating);
console.log(`Rating: ${stars}`); // Output: Rating: ★★★★


// d) Password Masking (e.g., show asterisks instead of password)  
  const maskedPassword = repeatString("*", 8);
  console.log(maskedPassword); // Output: ********



// e) Generating HTML Divider Lines (e.g., for rendering content)
  function generateDivider(char, length) {
    return `<hr>${char.repeat(length)}<hr>`;
  }
  console.log(generateDivider("=", 50)); //<hr>==================================================<hr>


// f) Console Progress Bar
function showProgress(percent) {
    const filled = "#".repeat(percent / 10); // 7
    const empty = "-".repeat(10 - percent / 10); // 3
    return `[${filled}${empty}] ${percent}%`;
  }
  console.log(showProgress(70)); // Output: [#######---] 70%
  
  