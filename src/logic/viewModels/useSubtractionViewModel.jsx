/**
 * @file ViewModel hook for Subtraction (manages state + logic).
 * @version 1.0.0
 */

import React, { useState, useCallback, useMemo } from "react";
import SubtractionModel from "../models/SubtractionModel";

const useSubtractionViewModel = () => {
    const [operandA, setOperandA] = useState(0);
    const [operandB, setOperandB] = useState(0);
    const [result, setResult] = useState(0);

    const handleChangeA = useCallback((event) => {
        setOperandA(parseFloat(event.target.value) || 0);
    }, []);

    const handleChangeB = useCallback((event) => {
        setOperandB(parseFloat(event.target.value) || 0);
    }, []);

    const handleCalculate = useCallback(() => {
        const calculatedResult = SubtractionModel.calculate(operandA, operandB);
        setResult(calculatedResult);
    }, [operandA, operandB]);

    return useMemo(
        () => ({
            operandA,
            operandB,
            result,
            handleChangeA,
            handleChangeB,
            handleCalculate,
        }),
        [operandA, operandB, result, handleChangeA, handleChangeB, handleCalculate]
    );
};

export default useSubtractionViewModel;
