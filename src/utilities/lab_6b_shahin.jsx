/**
 * @file This file contains the PrimeChecker class for determining if a number is prime.
 * @author MemberFive <member.five@team.com>
 * @version 1.0.0
 */

/**
 * Boolean variables should start with verbs like is, has, can, should.
 * Represents a utility class for checking primality of numbers.
 *
 * @class
 */
class PrimeChecker {

    /**
     * Creates an instance of the PrimeChecker class.
     * @constructor
     * @param {number} [numberToCheck=1] - The default number to be checked for primality.
     */
    constructor(numberToCheck = 1) {
        const initialNumber = numberToCheck;

        /**
         * The number currently stored for checking.
         * @type {number}
         */
        this.numberToCheck = initialNumber;
    }

    /**
     * Checks if a given positive integer is a prime number.
     * This function is NOT overloaded per the project requirements.
     *
     * @function
     * @param {number} n - The positive integer to check.
     * @returns {boolean} True if the number is prime, false otherwise.
     */
    isPrime = (n) => { // Using an arrow function where possible.
        // Use === for strict comparison.
        if (n <= 1) {
            return false;
        }

        if (n <= 3) {
            return true;
        }

        // Check divisibility by 2 or 3.
        if (n % 2 === 0 || n % 3 === 0) {
            return false;
        }

        // Optimized loop: Checks factors up to sqrt(n)
        for (let i = 5; i * i <= n; i = i + 6) {
            // Check divisibility by i and i + 2.
            if (n % i === 0 || n % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    };
}

// Use ES modules syntax for exports.
export default PrimeChecker;