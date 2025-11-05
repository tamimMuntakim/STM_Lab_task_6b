/**
 * @file This file contains the Division class for mathematical division operations.
 * @author shawlin <tabassumshawlin65@gmail.com>
 * @version 1.0.0
 */

/**
 * Represents a utility class for division operations.
 * It features the 'divide' method, which is overloaded, and a related 'getModulus' method.
 *
 * @class
 */
class Division {

    /**
     * Creates an instance of the Division class.
     * @constructor
     * @param {number} [numerator=0] - The default numerator.
     * @param {number} [denominator=1] - The default denominator.
     */
    constructor(numerator = 0, denominator = 1) {
        const initialNumerator = numerator;
        const initialDenominator = denominator;

        /**
         * The internal default numerator value.
         * @type {number}
         */
        this.numerator = initialNumerator;

        /**
         * The internal default denominator value.
         * @type {number}
         */
        this.denominator = initialDenominator;
    }

    /**
     * Divides one number by another.
     *
     * Overload Signatures Handled:
     * 1. divide(numerator: number, denominator: number): number | string
     * 2. divide(numerator: string, denominator: string): number | string (Converts strings to numbers)
     *
     * @function
     * @param {number | string} numerator - The number to be divided.
     * @param {number | string} denominator - The number to divide by.
     * @returns {number | string} The quotient, or an error message if division by zero occurs.
     */
    divide(numerator, denominator) {
        let numA = numerator;
        let numB = denominator;

        // Overload Case: Handle string inputs.
        if ((typeof numerator === 'string') || (typeof denominator === 'string')) {
            numA = parseFloat(numerator);
            numB = parseFloat(denominator);

            const isParsed = !isNaN(numA) && !isNaN(numB);
            if (!isParsed) {
                return 'Error: Invalid string inputs provided for division.';
            }
        }

        // Strict comparison to check for division by zero.
        if (numB === 0) {
            return 'Error: Cannot divide by zero.';
        }

        return numA / numB;
    }

    /**
     * Overloaded Functionality: Calculates the remainder (modulus) of a division.
     * This separates the remainder logic, fulfilling the requirement for different parameters.
     *
     * @function
     * @param {number} a - The dividend.
     * @param {number} b - The divisor.
     * @returns {number} The remainder (modulus).
     */
    getModulus = (a, b) => { // Using arrow function where possible (Airbnb rule)
        // Check for division by zero using strict comparison.
        if (b === 0) {
            return NaN;
        }

        return a % b;
    };
}

// Use ES modules syntax for exports.
export default Division;