/**
 * @file This file contains the Addition class for mathematical summation operations.
 * @author Tamim <tmmuntakim123@gmail.com>
 * @version 1.0.0
 */

/**
 * Represents a utility class for addition operations.
 * It features a single overloaded method, 'add', to handle various input formats.
 *
 * @class
 */
class Addition {

    /**
     * Creates an instance of the Addition class.
     * @constructor
     * @param {number} [initialValue=0] - An optional initial value for internal state, though the methods are static-like.
     */
    constructor(initialValue = 0) {
        // Always prefer const unless reassigning.
        const internalValue = initialValue;

        /**
         * The internal base value (only used as an example for constructor requirement).
         * @type {number}
         */
        this.baseValue = internalValue;
    }

    /**
     * Adds numbers together based on the input type and count, simulating method Overloading.
     *
     * Overload Signatures Handled:
     * 1. add(a: number, b: number): number
     * 2. add(numbers: number[]): number
     * 3. add(a: string, b: string): number (Converts string inputs to numbers)
     *
     * @function
     * @param {number | number[] | string} a - The first operand (number, array of numbers, or number string).
     * @param {number | string} [b] - The second optional operand (number or number string).
     * @returns {number | string} The sum of the inputs, or an error message for invalid input.
     */
    add(a, b) {
        // --- 1. Overload: Handling Array Input (add(numbers: number[])) ---
        if (Array.isArray(a)) {
            // Using reduce for clean summation.
            const total = a.reduce((sum, current) => sum + current, 0);
            return total;
        }

        // --- 2. Overload: Handling String Inputs (add(a: string, b: string)) ---
        if ((typeof a === 'string') && (typeof b === 'string')) {
            const numA = parseFloat(a);
            const numB = parseFloat(b);

            // Use === for strict comparison.
            if (isNaN(numA) || isNaN(numB)) {
                return 'Error: Cannot parse string inputs into valid numbers.';
            }

            return numA + numB;
        }

        // --- 3. Standard Case: Handling Two Number Inputs (add(a: number, b: number)) ---
        if ((typeof a === 'number') && (typeof b === 'number')) {
            return a + b;
        }

        // Catch-all for invalid or missing arguments.
        return 'Error: Invalid input signature for addition.';
    }

    /**
     * A specialized function for event handlers, often starting with 'handle'.
     * This example demonstrates adding two numbers after a hypothetical user interaction.
     *
     * @function
     * @param {number} a - The first operand.
     * @param {number} b - The second operand.
     * @returns {number} The result of the addition.
     */
    handleUserAddition(a, b) {
        return this.add(a, b);
    }
}

// Use ES modules syntax for exports.
export default Addition;

// Example usage to demonstrate functionality:
// const additionUtil = new Addition();
// console.log(additionUtil.add(10, 5));           // Standard (1): 15
// console.log(additionUtil.add([1, 2, 3, 4]));    // Overload (2): 10
// console.log(additionUtil.add('10.5', '4.2'));   // Overload (3): 14.7
// console.log(additionUtil.add('hello', 5));      // Invalid case: Error
