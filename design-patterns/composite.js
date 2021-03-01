class CompositeCalculation {

  constructor(dividend, divisor) {
    this.dividend = dividend;
    this.divisor = divisor;
  }

  getResult() {
    let dividendVal = (this.dividend instanceof CompositeCalculation) ? this.dividend.getResult() : this.dividend;
    let divisorVal = (this.divisor instanceof CompositeCalculation) ? this.divisor.getResult() : this.divisor;
    return dividendVal / divisorVal;
  }

}

module.exports = CompositeCalculation