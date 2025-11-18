/**
 * @file This file contains the View component for Addition, responsible solely for rendering.
 * @author Tamim <tmmuntakim123@gmail.com>
 * @version 1.0.1
 */

import React from "react";
// FIX: Explicitly including the .js extension to resolve module path error.
import useAdditionViewModel from "../logic/viewModels/useAdditionViewModel";

/**
 * The React component (View) that receives data and handlers from the ViewModel and renders the UI.
 * Avoids inline complex logic in JSX.
 * @function
 * @returns {JSX.Element}
 */
const AdditionView = () => {
    // Get all necessary data and methods from the ViewModel hook.
    const {
        operandA,
        operandB,
        result,
        handleChangeA,
        handleChangeB,
        handleCalculate,
    } = useAdditionViewModel();

    return (
        // JSX layout rules: wrap multi-line JSX in parentheses.
        <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-2xl space-y-6 sm:p-10">
            <h1 className="text-3xl font-bold text-indigo-700 text-center">
                Addition MVVM Demo
            </h1>
            <p className="text-gray-600 text-center">
                View Component (imports ViewModel)
            </p>

            {/* Input A */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    First Operand
                </label>
                <input
                    type="number"
                    value={operandA}
                    onChange={handleChangeA}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    aria-label="First Operand"
                />
            </div>

            {/* Input B */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Second Operand
                </label>
                <input
                    type="number"
                    value={operandB}
                    onChange={handleChangeB}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    aria-label="Second Operand"
                />
            </div>

            {/* Calculation Button */}
            <div>
                <button
                    onClick={handleCalculate}
                    className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out transform hover:scale-[1.01]"
                >
                    Calculate Sum
                </button>
            </div>

            {/* Result Display */}
            <div className="pt-4 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Result</h2>
                <div className="mt-2 p-4 bg-indigo-50 rounded-lg text-4xl font-extrabold text-indigo-900 text-center">
                    {/* Display the result state from the ViewModel. */}
                    {result}
                </div>
            </div>
        </div>
    );
};

export default AdditionView;
