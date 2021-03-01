const classes = require('../principles/inheritance');
const mammal = new classes.Human();
const human = new classes.Human();

test('Check if mammal is alive', () => {
  expect(mammal.isAlive()).toBe(true);
});

test('Check if human is alive', () => {
  expect(human.isAlive()).toBe(true);
});

test('Check if human can speak', () => {
  expect(human.canSpeak()).toBe(true);
});

test('Confirm that mammal cannot speak', () => {
  expect(typeof mammal.canSpeak === 'undefined').toBe(false);
});