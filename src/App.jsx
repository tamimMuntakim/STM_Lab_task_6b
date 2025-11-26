/**
 * @file This file serves as the main application entry point (App).
 * It replaces the boilerplate with the MVVM structure, importing the top-level View component.
 * @author ami <ami@google.com>
 * @version 1.2.1
 */

import React from "react";
// Imports the View component from the 'components' folder.
import AdditionView from "./components/AdditionView";
import SubtractionView from "./components/SubtractionVIew";

/**
 * The main application component.
 * This component's sole responsibility is to set up the global layout
 * and render the primary View component, thus adhering to MVVM separation.
 *
 * @function
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8 space-y-16">
            {/* Addition */}
            <AdditionView />

            {/* Subtraction */}
            <SubtractionView />
        </div>
    );
};

export default App;
