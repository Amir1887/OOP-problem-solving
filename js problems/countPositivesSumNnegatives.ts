// function that takes an array of numbers and:
// Counts how many positive numbers there are.
// Calculates the sum of all negative numbers.

function countPositivesSumNegatives(arr: number[]): number[] {
    if(!arr || arr.length === 0) return [0, 0];

    let count = 0;
    let sum = 0;
    for(let num of arr ){
        if( num > 0 ) count++
        else if ( num < 0) sum += num
    }
    return [count, sum];
}

// Real-World Use Cases
// 1. Fitness Tracker App
// Track how many days user gained weight (positive) vs. lost weight (negative total).
const weeklyChanges = [2, -1, 0, 3, -2, 1];
const [gainedDays, totalLost] = countPositivesSumNegatives(weeklyChanges);
console.log({gainedDays: gainedDays, totalLost: totalLost});
// => gainedDays: 3, totalLost: -3


// ----------------------------------------

// 2. Financial App
// Summarize account activity: how many deposits (positive) vs total amount withdrawn (negative).
const transactions = [100, -20, -30, 50, -10];
const [numDeposits, totalWithdrawn] = countPositivesSumNegatives(transactions);
// => numDeposits: 2, totalWithdrawn: -60

// ---------------------------------------------

// 3. Sentiment Analysis
// Count number of positive reviews vs. total weight of negative ones.


const sentimentScores = [1, -1, 1, -2, 0, 3];
const [positiveCount, totalNegativeScore] = countPositivesSumNegatives(sentimentScores);
// => 3 positive reviews, total negative score -3



// ✅ When to Use for...of
// Use it when you want to:
// Access each element directly (not the index or key).
// Avoid managing loop counters manually.
// Work with iterable structures like arrays, strings, sets, etc.



// | Loop Type      | Best For                         | Works On         | Syntax Example                                | Notes                                                |
// | -------------- | -------------------------------- | ---------------- | --------------------------------------------- | ---------------------------------------------------- |
// | **`for`**      | Full control (index-based loops) | Arrays           | `for (let i = 0; i < arr.length; i++)`        | Can access index and break/continue                  |
// | **`for...in`** | Iterating **keys/properties**    | Objects & Arrays | `for (let key in obj)` / `for (let i in arr)` | Use with objects; use `hasOwnProperty` if needed     |
// | **`for...of`** | Iterating **values**             | Iterables        | `for (let value of arr)`                      | Use with arrays, strings, sets, maps, NodeList, etc. |
// | **`forEach`**  | Iterating with a callback        | Arrays           | `arr.forEach((value, index) => {})`           | No `break` or `continue`; cannot use `await` inside  |


// Real-World Examples & Indications
// 1. Loop Through Array of Transactions

const transactionsa = [100, -50, 75, -10];

for (const amount of transactionsa) {
  console.log(`Transaction: ${amount}`);
}

// Indication: You only care about values, not their index.

//--------------------------------------------


// 2. Iterate Over a String (character by character)
const word = "hello";

for (const char of word) {
  console.log(char);
}

// Indication: You want to process each character without slicing or indexing.

// ------------------------------------------------


// 3. Loop Through a Set (unique values)
const tags = new Set(["tech", "finance", "tech"]);

for (const tag of tags) {
  console.log(tag); // no duplicates
}

// Indication: Clean iteration over unique values.

// -------------------------------------------------

// 4. Access Form Input Values
const inputs = document.querySelectorAll("input");

for (const input of inputs) {
  console.log(input.value);
}

// Indication: NodeList is iterable.


// 2. for...in
const obj = {}
for (let key in obj) {
    console.log(key, obj[key]);  // key + value of object
  }
  