const CalculationBuilder = require('../design-patterns/builder')
const builder = new CalculationBuilder()

test('Calculation builder returns correct CompositeCalculation', () => {
  // Attempting to replicate (6 / 2) / 3 = 1

  let calc = builder.build('6 / 2 / 3')

  expect(calc.getResult()).toBe(1);
});