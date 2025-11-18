/**
 * @file This file serves as the main application entry point (App).
 * It replaces the boilerplate with the MVVM structure, importing the top-level View component.
 * @author ami <ami@google.com>
 * @version 1.2.1
 */

import React from "react";
// Imports the View component from the 'components' folder.
import AdditionView from "./components/AdditionView";

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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            {/* Renders the top-level View component, which contains the ViewModel and Model logic */}
            <AdditionView />
        </div>
    );
};

export default App;
