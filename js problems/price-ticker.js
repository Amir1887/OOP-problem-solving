// Live Stock Price Ticker
// You want to display live prices of a stock, and allow the user to configure how often it updates:
// Casual users might want updates every 5 seconds. 

// Base Class – PriceTicker:
class PriceTicker {
    constructor({ template }) {
      this.template = template;
    }
  
    fetchPrice() {
      const price = (Math.random() * 100).toFixed(2); // simulate price
      console.log(this.template.replace('p', price));
    }
  
    start() {
      this.fetchPrice();
      this.timer = setInterval(() => this.fetchPrice(), 1000);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  }

// Usage
let ticker = new PriceTicker({ template: 'Price: $p'});
ticker.start(); // updates every 1 seconds
ticker.stop();

// --------------------------------------------------------------------------------------------------------------

// Active traders might want updates every 1 second, so modify this basic class to achieve this

//(extension of the baisc class) 
class CustomTicker extends PriceTicker {
    constructor(options) {
        super(options) // Call parent constructor
        this.precision = options.precision || 1000;
    }

    start() {
        this.fetchPrice();
        this.timer = setInterval(() => this.fetchPrice, this.precision); // according to entered precision (dynamic)
    }
}

// Usage
let customTicker = new CustomTicker({ template: 'Price: $p', precision: 5000 });
customTicker.start(); // updates every 5 seconds