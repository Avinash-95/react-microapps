import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.scss";

const root = createRoot(document.getElementById('user-mf'));
root.render(<App />);
