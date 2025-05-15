// counts how many true values are in an array, where 
// each true represents the presence of a sheep, and false, undefined, or null mean absent.

function countSheep(array) {
    return  array.filter(Boolean).length;
}


// Example usage:
const sheep = [true, true, false, null, true, undefined, false, true];
console.log(`Counted sheep: ${countSheep(sheep)}`); // Output: 4

// Real-World Use Cases

// A. Farm App – Tracking Sheep in Pen
const sheepPen = [true, false, null, true, undefined, true];
// Use `countSheep(sheepPen)` to show how many sheep are currently present


// B. Classroom Attendance
const attendance = [true, true, null, false, true];
// Count how many students are present: `countSheep(attendance)`


// C. Smart Home Sensors (e.g., motion detection per room)
const motionDetected = [true, undefined, false, true];
// Count number of rooms with detected motion: `countSheep(motionDetected)`
