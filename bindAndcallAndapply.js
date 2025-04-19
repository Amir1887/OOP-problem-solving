const doctor = {
    name: 'Dr. Smith',
    greet: function (patient, room) {
      console.log(`Hello ${patient}, I’m ${this.name}. Please go to ${room}.`);
    }
  };
  
  const nurse = {
    name: 'Nurse Joy'
  };
  
  // Challenge:
  
  // 1. Use `.call()` to greet "John" in "Room 1" as Nurse Joy
  // 2. Use `.apply()` to greet "Lisa" in "Room 2" as Nurse Joy
  // 3. Use `.bind()` to create a new function that always greets as Nurse Joy
  //    - Then use it to greet "Sam" in "Room 3"
  

//   🚀 Tasks:
//   What will be logged for each?
  
//   What's the difference between .call(), .apply(), and .bind()?

// Method  | Executes immediately? | Pass args how? |        |Returns a function?
// .call() | ✅ Yes |               As comma-separated args | ❌
// .apply()| ✅ Yes |               As an array             | ❌
// .bind() | ❌ No |                As comma-separated args | ✅ Yes


//   Can you write the full fixed code?

const doctor1 = {
    name: 'Dr. Smith',
    greet: function (patient, room) {
      console.log(`Hello ${patient}, I’m ${this.name}. Please go to ${room}.`);
    }
  };
  
  const nurse1 = {
    name: 'Nurse Joy'
  };
  
  // 1. .call()
  doctor.greet.call(nurse, 'John', 'Room 1');
  
  // 2. .apply()
  doctor.greet.apply(nurse, ['Lisa', 'Room 2']);
  
  // 3. .bind()
  const nurseGreet = doctor.greet.bind(nurse);
  nurseGreet('Sam', 'Room 3');
  