import { createRoot } from "react-dom/client";
import App from './App';
import './main.css'
import { Provider } from 'react-redux';

import { BrowserRouter } from "react-router";

const reactRoot = createRoot(root);
reactRoot.render(
    
        <BrowserRouter>
            <App />
        </BrowserRouter>
   
);

