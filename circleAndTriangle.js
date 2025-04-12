//🔥 Challenge: Circle and Triangle Prototypes with Factory Functions
// Build a geometry system using prototype chains and factory functions for different 2D shapes: circle and triangle.

const shape = {
    type : 'circle',

    describe(){
        return `this is a ${this.type}`
    },
}

const circle = Object.create(shape); // inherits from shape
circle.type = 'circle';

// method
circle.area = function () {
  return  Math.PI * radius * radius;
};

// method
circle.circumference = function() {
    return  2 * Math.PI * radius;
}
// factory function 
function createCircle(radius) {
    c = Object.create(circle); // inherits from circle
    c.raduis = radius;
    return c;
}

const triangle = Object.create(shape);
triangle.type = 'triangle';

// method
triangle.area = function() {
    return 0.5 * base * height
}


// factory function 
function createTriangle(base, height) {
    t = Object.create(triangle);
    t.base = base;
    t.height = height
    return t;
}


// example usage: 
const c = createCircle(3);
c.area();           // ≈ 28.27
c.circumference();  // ≈ 18.85
c.describe();       // "This is a circle"

const t = createTriangle(4, 5);
t.area();           // 10
t.describe();       // "This is a triangle"
