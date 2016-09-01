'use strict';
describe('Calculator Tests', function() {
    it('should add two numbers', function() {
            var a = 2,
                b = 3,
                sum = a + b;
            var addNumbers = calculator.add(a, b);
            expect(sum).toBe(addNumbers);
        }),
        it('should subtract two numbers', function() {
            var a = 5,
                b = 2,
                subtraction = a - b;
            var subtractNumbers = calculator.subtract(a, b);
            expect(subtraction).toBe(subtractNumbers);
        }),
        it('should multiply two numbers', function() {
            var a = 5,
                b = 2,
                multiplication = a * b;
            var multiplyNumbers = calculator.multiply(a, b);
            expect(multiplication).toBe(multiplyNumbers);
        }),
        it('should divide two numbers', function() {
            var a = 6,
                b = 2,
                division = a / b;
            var divideNumbers = calculator.divide(a, b);
            expect(division).toBe(divideNumbers);
        }),
        it('should count power', function() {
            var a = 2,
                b = 3,
                power = 2 * 2 * 2;
            var powerResult = calculator.power(a, b);
            expect(power).toBe(powerResult);
        }),
        it('should count square root', function() {
            var a = 4,
                squareRoot = 2;
            var squareRootResult = calculator.squareRoot(a);
            expect(squareRoot).toBe(squareRootResult);
        }),
        it('should count factorial for 3', function() {
            var a = 3,
                factorial = 1 * 2 * 3;
            var factorialNumber = calculator.factorial(a);
            expect(factorial).toBe(factorialNumber);
        }),
        it('should count factorial for 0', function() {
            var a = 0,
                factorial = 1;
            var factorialNumber = calculator.factorial(a);
            expect(factorial).toBe(factorialNumber);
        }),
        it('should throw exception in dividing by zero', function() {
            var divideNumbers = calculator.divide(6, 0);
            expect(divideNumbers).toThrow('Do not divide by zero!');
        }),
        it('should throw exception in invalid data in add', function() {
            var addNumbers = calculator.add(6, 'ala');
            expect(addNumbers).toThrow('Invalid data to add!');
        }),
        it('should throw exception in invalid data in subtract', function() {
            var addNumbers = calculator.subtract(6, '');
            expect(addNumbers).toThrow('Invalid data to add!');
        }),
        it('should throw exception in invalid data in factorial', function() {
            var factorial = calculator.factorial(-1);
            expect(factorial).toThrow('Invalid data to count factorial!');
        });
});
