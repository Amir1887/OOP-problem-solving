// 🧠 Challenge Problem: Shape Inheritance with Prototypes
// Create a prototype-based system for geometric shapes without using classes.
// shape object, rectangle object , square object, 
// Use Object.create() and Object.getPrototypeOf() where appropriate.
// Write assertions

// my solving:

const assert = require('assert');

const shape = {
  describe() {
    return 'I am a generic shape.';
  }
};

const rectangle = {
  __proto__: shape, // inherits from shape
  width: 2,
  height: 1,

  area() {
    return this.width * this.height;
  }
};
assert.equal(Object.getPrototypeOf(rectangle), shape);

const square = {
  __proto__: rectangle,
  side: 5,

  area() {
    return this.side * this.side; // Area of square = side²
  },

  // Optionally override width/height getters
  get width() {
    return this.side;
  },
  get height() {
    return this.side;
  }
};
assert.equal(Object.getPrototypeOf(square), rectangle);

// ✅ Test methods
assert.equal(shape.describe(), 'I am a generic shape.');
assert.equal(rectangle.area(), 2); // 2 * 1
assert.equal(square.area(), 25);   // 5 * 5
assert.equal(square.describe(), 'I am a generic shape.'); // inherited!

console.log('✅ All prototype chain tests passed!');
