
/**
 * @file This file contains the Subtraction class for mathematical subtraction operations.
 * @author Wasef <wasefudvash@gmail.com>
 * @version 1.0.0
 */

/**
 * Represents a utility class for subtraction operations.
 * The primary method, 'subtract', is overloaded to handle two numbers or an array of subtrahends.
 *
 * @class
 */
class Subtraction {

    /**
     * Creates an instance of the Subtraction class.
     * @constructor
     * @param {number} [a=0] - The default starting operand.
     * @param {number} [b=0] - The default subtrahend.
     */
    constructor(a = 0, b = 0) {
        // Always prefer const unless reassigning.
        const defaultA = a;
        const defaultB = b;

        /**
         * The internal default value A.
         * @type {number}
         */
        this.valueA = defaultA;

        /**
         * The internal default value B.
         * @type {number}
         */
        this.valueB = defaultB;
    }

    /**
     * Calculates the difference between numbers, supporting two primary signatures.
     *
     * Overload Signatures Handled:
     * 1. subtract(a: number, b: number): number
     * 2. subtract(startingValue: number, subtrahends: number[]): number
     *
     * @function
     * @param {number} startingValue - The initial value to subtract from.
     * @param {number | number[]} subtrahends - A single number, or an array of numbers to be subtracted sequentially.
     * @returns {number} The final difference.
     */
    subtract(startingValue, subtrahends) {
        // Standard Case: If the second argument is a number (a - b).
        if (typeof subtrahends === 'number') {
            return startingValue - subtrahends;
        }

        // Overload Case: If the second argument is an array (cumulative subtraction).
        if (Array.isArray(subtrahends)) {
            // Use const for the accumulated result.
            const finalDifference = subtrahends.reduce((difference, current) => {
                return difference - current;
            }, startingValue); // Start reduction with the startingValue

            return finalDifference;
        }

        // Catch-all for invalid input.
        return NaN;
    }
}

// Use ES modules syntax for exports.
export default Subtraction;


