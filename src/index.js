import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import { store } from './apps/Store';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

const root = ReactDOM.createRoot(document.getElementById('root'));
let persist = persistStore(store);
root.render(
  <BrowserRouter>
       <Routes>
           <Route exact path='*' element={
                <Provider store={store}>
                     <PersistGate persistor={persist}>
                             <App />
                     </PersistGate>
                </Provider> }/>
       </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
