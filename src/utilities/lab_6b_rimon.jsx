/**
 * @file This file contains the Multiplication class for mathematical product operations.
 * @author Rimon <haqueiftekharul84@gmail.com>
 * @version 1.0.0
 */

/**
 * Represents a utility class for multiplication operations.
 * The primary method, 'multiply', is overloaded to handle two factors or an array of factors.
 *
 * @class
 */
class Multiplication {

    /**
     * Creates an instance of the Multiplication class.
     * @constructor
     * @param {number} [factorA=1] - The default first factor.
     * @param {number} [factorB=1] - The default second factor.
     */
    constructor(factorA = 1, factorB = 1) {
        const internalFactorA = factorA;
        const internalFactorB = factorB;

        /**
         * The internal default value for factor A.
         * @type {number}
         */
        this.factorA = internalFactorA;

        /**
         * The internal default value for factor B.
         * @type {number}
         */
        this.factorB = internalFactorB;
    }

    /**
     * Calculates the product of numbers, supporting two primary signatures.
     *
     * Overload Signatures Handled:
     * 1. multiply(a: number, b: number): number
     * 2. multiply(factors: number[]): number
     *
     * @function
     * @param {number | number[]} factorsOrA - Either an array of factors, or the first factor 'A'.
     * @param {number} [b] - The second factor 'B', used only in the two-number signature.
     * @returns {number} The product.
     */
    multiply(factorsOrA, b) {
        // Overload Case: If the first argument is an array (product of all elements).
        if (Array.isArray(factorsOrA)) {
            // Use reduce to find the product.
            return factorsOrA.reduce((product, current) => product * current, 1);
        }

        // Standard Case: If both arguments are numbers (a * b).
        if ((typeof factorsOrA === 'number') && (typeof b === 'number')) {
            return factorsOrA * b;
        }

        // Catch-all for invalid input.
        return NaN;
    }
}

// Use ES modules syntax for exports.
export default Multiplication;