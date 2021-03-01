const CompositeCalculation = require("./composite");

class CalculationBuilder {

  constructor() {

  }

  build(equationStr) {
    let args = equationStr.replace(' ', '').split('/')
    let stack = []
    
    for (let i in args) {
      let arg = args[i]
      if (stack.length < 2) {
        stack.push(arg)
      }
      if (stack.length === 1) {
        continue
      }
      let divisor = stack.pop()
      let dividend = stack.pop()
      let calc = new CompositeCalculation(dividend, divisor)
      stack.push(calc)
    }

    return stack[0]
  }

}

module.exports = CalculationBuilder