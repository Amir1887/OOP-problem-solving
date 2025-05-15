// check each number in an array:
// If its square root is an integer, replace it with the square root.
// If not, replace it with the number multiplied by itself.

function transformNumbersoF (numbers){
    const output = [];
    for( const number of numbers ) {
        const sqrt = Math.sqrt(number);
        if (Number.isInteger(sqrt)) {
            output.push(sqrt);
        } else {
            output.push( number * number );
        }
    }
    return output;

}

  

function transformNumbers(arr) {
    return arr.map(num => {
      const sqrt = Math.sqrt(num);
      return Number.isInteger(sqrt) ? sqrt : num * num;
    });
  }
  

// Real-World Use Cases

// 1. Education Platform - Practice Math Logic
// When students submit answers, you may want to auto-adjust values to their square roots if perfect squares.
let Input = [4, 3, 9, 7, 16];
const transformed = transformNumbers(Input);
const transformedOf = transformNumbersoF(Input);
console.log({transformed}); /// [2, 9, 3, 49, 4]
console.log({transformedOf});

// Output: [2, 9, 3, 49, 4]


// 2. Data Sanitization or Normalization
// If you’re preparing numerical data for a machine learning model or stats:
// Keep square roots if clean
// Otherwise, exaggerate the value for impact


// 3. Game Development - Level Scaling
// You might reduce or increase points based on whether a number is a perfect square:
const enemyLevels = [1, 2, 3, 4, 5]; // Output: [1, 4, 9, 2, 25]


// | Feature                  | `map()`                                      | `for...of`                                 |
// | ------------------------ | -------------------------------------------- | ------------------------------------------ |
// | **Purpose**              | Creates a new array by transforming elements | General iteration over iterable values     |
// | **Return Needed**        | Always returns a new array                   | Manual push to result array is required    |
// | **More Concise**         | Yes                                          | No (more verbose, but readable)            |
// | **Functional Style**     | Yes (declarative)                            | No (imperative style)                      |
// | **Control Flow (break)** | Cannot break early                           | Can use `break`, `continue`, `return`      |
// | **Async Compatibility**  | Not good with `await`                        | Supports `for await...of` for async values |
