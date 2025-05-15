// function that sums an array of numbers excluding the highest and lowest values. 
// This could be useful in a scenario like scoring in a competition, where the highest and lowest judge scores are excluded to reduce bias.


function sumWithoutHighestAndLowest(score){
    if(!Array.isArray(score) || score.length < 2 ) return 0;
    let maxValue = Math.max(...score);
    let minValue = Math.min(...score);
    const total = score.reduce((acc, current) => acc + current);
    return total - maxValue - minValue
}

// Example usage:
const judgeScores = [8, 9, 7, 10, 6];
const finalScore = sumWithoutHighestAndLowest(judgeScores);

console.log(`Final Score: ${finalScore}`); // Output: Final Score: 24