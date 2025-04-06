import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import store from './REDUX/store.js';
//import store from './app/store.js';
// import store from './tenTimer/store.js';
import store from './AsyncThunk/store.js'

import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
)
