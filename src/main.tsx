import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx/App.tsx';
import './theme.scss';
import '@fontsource-variable/work-sans';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
