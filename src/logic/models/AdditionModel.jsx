/**
 * @file This file contains the pure business logic (Model) for addition operations.
 * @author Tamim <tmmuntakim123@gmail.com>
 * @version 1.0.0
 */

/**
 * Represents the pure business logic for addition operations.
 * This class is dependency-free and can be reused across different ViewModels.
 * @class
 */
class AdditionModel {
    /**
     * Creates an instance of the AdditionModel.
     * @constructor
     */
    constructor() {
        // Model constructor for initialization, if needed.
    }

    /**
     * Calculates the sum of two numbers.
     * @function
     * @param {number} a - The first operand.
     * @param {number} b - The second operand.
     * @returns {number} The sum.
     */
    static calculate(a, b) {
        // Use const and ensure clean calculation.
        const sum = a + b;
        return sum;
    }
}

export default AdditionModel;
