class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.result;
    }

    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
     this.result = Math.round ((this.min + this.max)/2);
     return this.result;
    }

    lower() {
      return this.max = this.result;
    }

    greater() {
            return this.min = this.result; 
    }
}

module.exports = GuessingGame;
