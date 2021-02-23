const Passport = require('../src/abstraction');
const dob = '1/1/2000';
const ssn = '123456';
const inst = new Passport(dob, ssn);

test('Can still access soft private variables', () => {
  expect(inst._dob).toBe(dob);
});

test('Cannot access private variables declared with # symbol', () => {
  expect(typeof inst.ssn === 'undefined').toBe(true);
});