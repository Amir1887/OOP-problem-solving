//  budget tracking app to calculate total income (positive transactions) from an array of transactions:

function sumOfPositives(array){
    return array.filter(x => x > 1).reduce((previousValue, currentValue) => previousValue + currentValue);
}



// Example usage:
const transactionHistory = [500, -200, 150, -50, 1200];
const totalIncome = sumOfPositives(transactionHistory);

console.log(`Total Income: $${totalIncome}`); // Output: Total Income: $1850
