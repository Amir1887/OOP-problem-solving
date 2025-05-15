// you have this  Base Class – Notifier
// please Extended Class – UrgentNotifier which shows the message more frequently (default: 1s), and adds a prefix.


class Notifier {
    constructor({ message, interval }) {
      this.message = message;
      this.interval = interval || 5000; // default: 5 seconds
    }
  
    show() {
      console.log(`[Notification]: ${this.message}`);
    }
  
    start() {
      this.show();
      this.timer = setInterval(() => this.show(), this.interval);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  }

// Usage:
const normalNotice = new Notifier({ message: "Check your inbox", interval: 3000 });
normalNotice.start();

// Stop after 10 seconds
setTimeout(() => {
  normalNotice.stop();
  console.log("Notifications stopped.");
}, 10000);

  
// the solution ()
// Extended Class – UrgentNotifier: shows the message more frequently (default: 1s), and adds a prefix.

class UrgentNotifier extends Notifier {
  constructor(options) {
    super(options);
    this.urgencyLevel = options.urgencyLevel || 'High';
    this.interval = options.interval || 1000; // default to faster update
  }

  show() {
    console.log(`[URGENT - ${this.urgencyLevel}]: ${this.message}`);
  }
}


// Usage Example
const urgentNotice = new UrgentNotifier({ message: "System failure!", urgencyLevel: "Critical", interval: 1000 });
urgentNotice.start();

// Stop both after 10 seconds
setTimeout(() => {
  normalNotice.stop();
  urgentNotice.stop();
  console.log("Notifications stopped.");
}, 10000);