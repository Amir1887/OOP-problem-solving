//  returns the opposite of a given number (i.e., flips positive to negative and vice versa).
function findOpposite(number) {
  return -number;
}



// Real-World Use Cases:


// Use Case 1: Reversing Movement Direction in a Game
function reverseDirection(currentSpeed) {
    return -currentSpeed;
  }
  
  let playerSpeed = 5;
  playerSpeed = reverseDirection(playerSpeed); // now -5 (move left)

// ---------------------------

// Use Case 2: Financial App – Switching between Debit/Credit
// In finance, positive might mean "credit" and negative means "debit".
  function toggleTransactionType(amount) {
    return -amount;
  }
  
  let amount = 250; // $250 credited
  amount = toggleTransactionType(amount); // -250 means it's debited
  
  
// ---------------------------
// Use Case 3: Flipping Chart Axis
// In a data visualization, you might want to flip a value to reverse the axis.

function flipYAxis(value) {
    return -value;
  }
  
  const chartY = [100, 200, -150].map(flipYAxis); // [-100, -200, 150]
  