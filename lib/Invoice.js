'use strict'
module.exports = class Invoice {

  constructor() {
    this.amount = 0;
  }

  set plusnum(val = 0) {
    val = parseFloat(val).toFixed(2);
    if (val >= 0 && val < 10000) {
      this.amount = parseFloat(val);
    } else throw new Error("amount is NaN");
  }

  set minus(val = 0) {
    val = parseFloat(val).toFixed(2);
    if (val >= 0 && val < 10000) {
      this.amount = val * -1;
    } else throw new Error("amount is NaN");
  }
}