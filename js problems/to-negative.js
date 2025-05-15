// Convert any positive number to its negative equivalent, but leave negative numbers unchanged.


function toNegative (num) {
    return num > 0 ? -num : num;
}

// Real-World Use Cases

// 1. Financial App: Enforce Outflow Format
const userEnteredAmount = 200;  // User mistakenly enters income
const expense = toNegative(userEnteredAmount); // always stored as -200

// -------------

// 2. Physics Engine: Enforce Downward Gravity
const gravityForce = 9.8;
const downwardForce = toNegative(gravityForce); // -9.8 m/s²

//------------------

// 3. UI Animation: Slide Left Always
function slideLeft(distance) {
    const x = toNegative(distance); // ensures it always goes left
    element.style.transform = `translateX(${x}px)`;
  }
  