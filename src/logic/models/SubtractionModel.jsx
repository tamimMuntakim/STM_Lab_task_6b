/**
 * @file Pure business logic (Model) for subtraction operations.
 * @author Wasef <wasefudvash@gamil.com>
 * @version 1.0.0
 */

class SubtractionModel {
    /**
     * Calculates the difference between two numbers.
     * @param {number} a - First operand.
     * @param {number} b - Second operand.
     * @returns {number} The difference.
     */
    static calculate(a, b) {
        const diff = a - b;
        return diff;
    }
}

export default SubtractionModel;
