'use strict';
describe('Calculator Tests', function() {
    it('should add two numbers', function() {
            //given
            var a = 2,
                b = 3,
                sum = a + b;
            //when
            var addNumbers = calculator.add(a, b);
            //then
            expect(addNumbers).toBe(sum);
        }),
        it('should subtract two numbers', function() {
            //given
            var a = 5,
                b = 2,
                subtraction = a - b;
            //when
            var subtractNumbers = calculator.subtract(a, b);
            //then
            expect(subtractNumbers).toBe(subtraction);
        }),
        it('should multiply two numbers', function() {
            //given
            var a = 5,
                b = 2,
                multiplication = a * b;
            //when
            var multiplyNumbers = calculator.multiply(a, b);
            //then
            expect(multiplyNumbers).toBe(multiplication);
        }),
        it('should divide two numbers', function() {
            //given
            var a = 6,
                b = 2,
                division = a / b;
            //when
            var divideNumbers = calculator.divide(a, b);
            //then
            expect(divideNumbers).toBe(division);
        }),
        it('should count power', function() {
            //given
            var a = 2,
                b = 3,
                power = 2 * 2 * 2;
            //when
            var powerResult = calculator.power(a, b);
            //then
            expect(powerResult).toBe(power);
        }),
        it('should count square root', function() {
            //given
            var a = 4,
                squareRoot = 2;
            //when
            var squareRootResult = calculator.squareRoot(a);
            //then
            expect(squareRootResult).toBe(squareRoot);
        }),
        it('should count factorial for 3', function() {
            //given
            var a = 3,
                factorial = 1 * 2 * 3;
            //when
            var factorialNumber = calculator.factorial(a);
            //then
            expect(factorialNumber).toBe(factorial);
        }),
        it('should count factorial for 0', function() {
            //given
            var a = 0,
                factorial = 1;
            //when
            var factorialNumber = calculator.factorial(a);
            //then
            expect(factorialNumber).toBe(factorial);
        }),
        it('should throw exception in dividing by zero', function() {
            //when
            var divideNumbers = calculator.divide(6, 0);
            //then
            expect(divideNumbers).toThrow('Do not divide by zero!');
        }),
        it('should throw exception in invalid data in add', function() {
            //when
            var addNumbers = calculator.add(6, 'ala');
            //then
            expect(addNumbers).toThrow('Invalid data to add!');
        }),
        it('should throw exception in invalid data in subtract', function() {
            //when
            var addNumbers = calculator.subtract(6, '');
            //then
            expect(addNumbers).toThrow('Invalid data to add!');
        }),
        it('should throw exception in invalid data in factorial', function() {
            //when
            var factorial = calculator.factorial(-1);
            //then
            expect(factorial).toThrow('Invalid data to count factorial!');
        });
});
