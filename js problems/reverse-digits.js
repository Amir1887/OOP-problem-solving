//  converting a non-negative number (like 348597) into a reversed array of digits (e.g., [7,9,5,8,4,3]).


// Real-World Implementations:
function reverseDigits(number) {
    if(isNaN(number)) return 'the entered value is not a number';
   return number.toString().split('').map(x => Number(x)).reverse();
}

// A. Digital Puzzle Game (e.g., reverse digits for levels)
    const nextLevelCode = reverseDigits(2025); // [5, 2, 0, 2] → used as level logic
    console.log(nextLevelCode);

// B. Credit Card Reverse Check (last digits)
    const reversedLast4 = reverseDigits(1234).slice(0, 2);  // [4, 3] → used to match UI display format securely

// C. Phone Number Memory Game
    const phoneCode = 987654;
    const digitsToDisplay = reverseDigits(phoneCode); // [4, 5, 6, 7, 8, 9] → shown in reverse for memory challenges
    



    
