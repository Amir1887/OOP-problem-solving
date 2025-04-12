//🔥 Challenge: Dynamic Shape Factory Using Prototypes
// Your task is to create a prototype-based shape system using Object.create() where you can dynamically create different shapes that share behavior.

const shape = {
    type: 'shape',
    describe() {
      return `This is a ${this.type}`;
    },
  };
  
  const rectangle = Object.create(shape); // inherits from shape
  rectangle.type = 'rectangle';
  rectangle.area = function () {
    return this.width * this.height;
  };
  
  function createRectangle(width, height) {
    const rect = Object.create(rectangle); // inherits from rectangle
    rect.width = width;
    rect.height = height;
    return rect;
  }
  
  const square = Object.create(rectangle); // inherits from rectangle
  square.type = 'square';
  square.area = function () {
    return this.side * this.side;
  };
  
  function createSquare(side) {
    const sq = Object.create(square); // inherits from square
    sq.side = side;
    // optionally sync width/height for rectangle-based logic
    sq.width = side;
    sq.height = side;
    return sq;
  }

  
  const r = createRectangle(3, 4);
  console.log(r.describe()); // This is a rectangle
  console.log(r.area());     // 12
  
  const s = createSquare(5);
  console.log(s.describe()); // This is a square
  console.log(s.area());     // 25
  