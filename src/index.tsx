import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {LandingPage} from './pages';
import {LanguageProvider} from "./contexts/LanguageContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

//  Thanks to language provider we can hot swap application language without reloading the page
root.render(
    <React.StrictMode>
        <LanguageProvider>
            <LandingPage/>
        </LanguageProvider>
    </React.StrictMode>
);
