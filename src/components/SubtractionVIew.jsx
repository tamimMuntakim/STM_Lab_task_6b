/**
 * @file View component for Subtraction (UI only).
 * @version 1.0.1
 */

import React from "react";
import useSubtractionViewModel from "../logic/viewModels/useSubtractionViewModel";

const SubtractionView = () => {
    const {
        operandA,
        operandB,
        result,
        handleChangeA,
        handleChangeB,
        handleCalculate,
    } = useSubtractionViewModel();

    return (
        <div className="mt-16 p-8 max-w-md mx-auto bg-white rounded-xl shadow-2xl space-y-6 sm:p-10">
            <h1 className="text-3xl font-bold text-red-700 text-center">
                Subtraction MVVM Demo
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
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out text-black"
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
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out text-black"
                />
            </div>

            {/* Button */}
            <button
                onClick={handleCalculate}
                className="w-full bg-red-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-200 ease-in-out transform hover:scale-[1.01]"
            >
                Calculate Difference
            </button>

            {/* Result */}
            <div className="pt-4 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Result</h2>
                <div className="mt-2 p-4 bg-red-50 rounded-lg text-4xl font-extrabold text-red-900 text-center">
                    {result}
                </div>
            </div>
        </div>
    );
};

export default SubtractionView;
