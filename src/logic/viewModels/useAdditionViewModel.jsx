/**
 * @file This file contains the ViewModel hook for Addition, managing state and logic.
 * @author Tamim <tmmuntakim123@gmail.com>
 * @version 1.0.0
 */

import React, { useState, useCallback, useMemo } from "react";
// Import the Model from its separate path
import AdditionModel from "../models/AdditionModel";

/**
 * A custom hook (ViewModel) that handles all state, logic, and interaction with the Model.
 * This completely isolates the business logic from the UI (View).
 * @function
 * @returns {{
 * operandA: number,
 * operandB: number,
 * result: number,
 * handleChangeA: (event: React.ChangeEvent<HTMLInputElement>) => void,
 * handleChangeB: (event: React.ChangeEvent<HTMLInputElement>) => void,
 * handleCalculate: () => void,
 * }}
 */
const useAdditionViewModel = () => {
    // State management: Use const for variables unless reassigning.
    const [operandA, setOperandA] = useState(0);
    const [operandB, setOperandB] = useState(0);
    const [result, setResult] = useState(0);

    // Function names should describe what they do and handlers start with 'handle'.
    /**
     * @function
     * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
     */
    const handleChangeA = useCallback((event) => {
        const value = parseFloat(event.target.value) || 0;
        setOperandA(value);
    }, []);

    /**
     * @function
     * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
     */
    const handleChangeB = useCallback((event) => {
        const value = parseFloat(event.target.value) || 0;
        setOperandB(value);
    }, []);

    /**
     * Executes the calculation logic using the Model.
     * @function
     */
    const handleCalculate = useCallback(() => {
        // Call the pure Model function.
        const calculatedResult = AdditionModel.calculate(operandA, operandB);
        setResult(calculatedResult);
    }, [operandA, operandB]); // Dependency array for useCallback

    // Memoize the public interface of the ViewModel.
    return useMemo(
        () => ({
            operandA,
            operandB,
            result,
            handleChangeA,
            handleChangeB,
            handleCalculate,
        }),
        [
            operandA,
            operandB,
            result,
            handleChangeA,
            handleChangeB,
            handleCalculate,
        ]
    );
};

export default useAdditionViewModel;
