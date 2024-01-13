import React from 'react';
import ReactDOM from 'react-dom/client';

//App
import App from './App';

//Provider
import { AdminProvider } from './context/admin.context';

//css
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminProvider>
      <App />
    </AdminProvider>
  </React.StrictMode>,
);
