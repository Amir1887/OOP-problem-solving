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

// ---------------------------------------------------------------------------------------------------- // 

                    // 2.Why doesn't it behave as expected? //

// ---------------------------------------------------------------------------------------------------- // 

                // 3.Fix it so that the output is:
Log: 1
Log: 2
Log: 3


