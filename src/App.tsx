import React from 'react';
import {BrowserRouter as Browser} from "react-router-dom";
import AppRoutes from "./routes";


function App() {
    return (
        <Browser>
            <AppRoutes/>
        </Browser>
    );
}

export default App;
