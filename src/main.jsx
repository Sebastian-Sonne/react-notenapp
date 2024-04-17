import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './assets/css/styles.css';
import './assets/css/custom.css'; 

function Main() {
    return (
        <React.StrictMode>

            <App />

        </React.StrictMode>
    );
}

createRoot(document.getElementById('root')).render(<Main />);