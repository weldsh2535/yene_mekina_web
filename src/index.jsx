import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './utils/i18n.js';
import { store } from './app/store.js';
import App from './App';


import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="loading...">
        {/* <Provider store={driveStore}> */}
        <App />
        {/* </Provider> */}
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();