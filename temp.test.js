const { celsiusToFahrenheit } = require('./temp');

test('صفر مئوية يساوي 32 فهرنهايت', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('100 مئوية يساوي 212 فهرنهايت', () => {
  expect(celsiusToFahrenheit(100)).toBe(212);
});

test('37 مئوية يساوي 98.6 فهرنهايت', () => {
  expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6);
});
