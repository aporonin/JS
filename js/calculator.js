'use strict';

var calculator = function() {
    var result;
    return {
        add: function(a, b) {
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                result = a + b;
            } else {
                throw 'Invalid data to add!';
            }
            return result;
        },
        subtract: function(a, b) {
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                result = a - b;
            } else {
                throw 'Invalid data to subtract!';
            }
            return result;
        },
        divide: function(a, b) {
            if (b !== 0 && !isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                result = a / b;
            } else if (b === 0) {
                throw 'Do not divide by zero!';
            } else {
                throw 'Invalid data to divide!';
            }
            return result;
        },
        multiply: function(a, b) {
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                result = a * b;
            } else {
                throw 'Invalid data to multiply!';
            }
            return result;
        },
        power: function(a, b) {
            if (!isNaN(a) && !isNaN(b) && a !== null && b !== null && typeof a !== 'string' && typeof b !== 'string' && arguments.length === 2) {
                result = Math.pow(a, b);
            } else {
                throw 'Invalid data to count power!';
            }
            return result;
        },
        squareRoot: function(a) {
            if (!isNaN(a) && a !== null && typeof a !== 'string' && arguments.length === 1 && a > 0) {
                result = Math.sqrt(a);
            } else {
                throw 'Invalid data to count square root!';
            }
            return result;
        },
        factorial: function(a) {
            result = 1;
            if (!isNaN(a) && a !== null && typeof a !== 'string' && arguments.length === 1 && a > 0) {
                while (a > 0) {
                    result = result * a;
                    a = a - 1;
                }
            } else if (!isNaN(a) && a !== null && typeof a !== 'string' && arguments.length === 1 && a === 0) {
                result = 1;
            } else {
                throw 'Invalid data to count factorial!';
            }
            return result;
        }
    };
}();
