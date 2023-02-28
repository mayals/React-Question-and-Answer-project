import React from 'react';
import ReactDOM from 'react-dom/client';

//https://react-bootstrap.github.io/getting-started/introduction/#css
//{/* The following line can be included in your src/index.js or App.js file */}
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
