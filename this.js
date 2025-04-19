// 🧠 Challenge: Delayed Logging in a Loop

const delayedLogger = {
    prefix: 'Log',
    logNumbers: function () {
      for (var i = 1; i <= 3; i++) {
        setTimeout(function () {
          console.log(`${this.prefix}: ${i}`);
        }, i * 1000);
      }
    }
  };
  
  delayedLogger.logNumbers();
  

//🧩 Your Mission:
                    // 1.What will be logged in the console?//
undefined: 4
undefined: 4
undefined: 4

// this.prefix becomes undefined because this refers to the global object, not delayedLogger.
// Because of var i = 1, which is function-scoped, all the timeouts will log the same value of i by the time the callbacks run — which is 4.




// ---------------------------------------------------------------------------------------------------- // 

                    // 2.Why doesn't it behave as expected? //
  
// Regular functions lose this, so it doesn’t refer to delayedLogger.
// Using var means the same i is shared across all iterations

// By the time the timeouts run, i has incremented to 4
// So:
// this.prefix ⇒ undefined
// i ⇒ 4



// ---------------------------------------------------------------------------------------------------- // 

                // 3.Fix it so that the output is:
Log: 1
Log: 2
Log: 3


// 🔁 Option 1: Use let instead of var

const delayedLogger1 = {
    prefix: 'Log',
    logNumbers: function () {
      for (let i = 1; i <= 3; i++) {
        setTimeout( () =>  {
          console.log(`${this.prefix}: ${i}`);
        }, i * 1000);
      }
    }
  };
  
  delayedLogger.logNumbers();

// ✅ let creates a new block-scoped i for each loop iteration
// ✅ this is preserved via arrow function
// ✔️ Final output:
Log: 1
Log: 2
Log: 3

  

// 🧠 Option 2 — IIFE (Immediately Invoked Function Expression): 

for (var i = 1; i <= 3; i++) {
    ((num) => {
        setTimeout(() => {
            console.log(`${this.prefix} : ${num}`);
        }, num * 1000)
    })(i);  // 👈 Immediately passing `i` as `num` >> it is the argument of the arrow fn
}


//IIFE Useful in loops to capture values like i before they change.
