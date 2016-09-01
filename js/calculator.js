'use strict';

var calculator = function() {
    return {
        add: function(a, b) {
            var sum;
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                sum = a + b;
            } else {
                throw 'Invalid data to add!';
            }
            return sum;
        },
        subtract: function(a, b) {
            var subtraction;
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                subtraction = a - b;
            } else {
                throw 'Invalid data to subtract!';
            }
            return subtraction;
        },
        divide: function(a, b) {
            var division;
            if (b !== 0 && !isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                division = a / b;
            } else if (b === 0) {
                throw 'Do not divide by zero!';
            } else {
                throw 'Invalid data to divide!';
            }
            return division;
        },
        multiply: function(a, b) {
            var multiplication;
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                multiplication = a * b;
            } else {
                throw 'Invalid data to multiply!';
            }
            return multiplication;
        },
        power: function(a, b) {
            var power;
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                power = Math.pow(a, b);
            } else {
                throw 'Invalid data to count power!';
            }
            return power;
        },
        squareRoot: function(a) {
            var squareRoot;
            if (!isNaN(a) && a !== null && typeof a !== 'string' && arguments.length === 1 && a > 0) {
                squareRoot = Math.sqrt(a);
            } else {
                throw 'Invalid data to count square root!';
            }
            return squareRoot;
        },
        factorial: function(a) {
            var factorial = 1;
            if (!isNaN(a) && a !== null && typeof a !== 'string' && arguments.length === 1 && a > 0) {
                while (a > 0) {
                    factorial = factorial * a;
                    a = a - 1;
                }
            } else if (!isNaN(a) && a !== null && typeof a !== 'string' && arguments.length === 1 && a === 0) {
                factorial = 1;
            } else {
                throw 'Invalid data to count factorial!';
            }
            return factorial;
        }
    };

}();
