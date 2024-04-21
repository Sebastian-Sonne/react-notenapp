import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/css/styles.css';
import './assets/css/custom.css'; 

/**
 * Main react component, starts App
 * @returns Main JSX component
 */
function Main() {
    return (
        <React.StrictMode>

            <App />

        </React.StrictMode>
    );
}

createRoot(document.getElementById('root')).render(<Main />);