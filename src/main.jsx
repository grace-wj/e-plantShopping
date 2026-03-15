import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// The Provider component from the react-redux library enables all components to access the Redux store
import { Provider } from 'react-redux';
// The Redux store holds the application's state, using the reducer defined in CartSlice.jsx
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App with Provider and pass the store so all components can access and interact with global state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
