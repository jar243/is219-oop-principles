const CompositeCalculation = require('../design-patterns/composite');

test('Composite calculation returns correct result', () => {
  // Attempting to replicate (6 / 2) / 3 = 1

  let childCalculation = new CompositeCalculation(6, 2);
  let parentCalculation = new CompositeCalculation(childCalculation, 3);

  expect(parentCalculation.getResult()).toBe(1);
});