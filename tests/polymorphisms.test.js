const classes = require('../principles/polymorphisms');

test('Polymorphism Class Vehicle returns null on get function', () => {
  let v = new classes.Vehicle()
  expect(v.getMaxPassengers()).toBe(null);
});

test('Get function for Car class working', () => {
  let c = new classes.Car(5)
  expect(c.getMaxPassengers()).toBe(5);
});

test('Get function for Train class working', () => {
  let t = new classes.Train(5, 30)
  expect(t.getMaxPassengers()).toBe(150);
});