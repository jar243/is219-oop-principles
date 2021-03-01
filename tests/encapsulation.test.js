const Person = require('../principles/encapsulation');
const name = 'John';

test('Can use class methods to access data about an object', () => {
  let p = new Person(name)
  expect(
    p.getName()
  ).toBe(name);
});