// Write a function that takes two arguments:
// x: the step value (e.g., 1)
// n: the number of times to count (e.g., 5)

// Return an array with n multiples of x.

function countBy (x, n) {
    let result = [];
    for (let i =1; i <= n; i++){
        result.push(x * i);
    }
    return result;
}


// ✅ Real-World Use Cases
// 1. Recurring Events or Reminders
// Set reminders every x minutes for n times:
const result = countBy(15, 4)  // ➜ [15, 30, 45, 60]  (reminders every 15 min)
console.log({result});


// 2. Payment Installments
// Generate equal payment amounts:
// 10 USD per month for 6 months
countBy(10, 6); // [10, 20, 30, 40, 50, 60]


// 3. Game Level Scaling
// Generate experience points or costs per level:
countBy(100, 5); // [100, 200, 300, 400, 500]

// solve the Count by x challenge using more functional approaches like Array.from() and map().
