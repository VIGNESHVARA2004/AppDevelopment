import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from './Components/state/index';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductStore from './Components/Shop/ProductStore';

const store = configureStore({
  reducer : {
    auth: authReducer,
    products: ProductStore,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


