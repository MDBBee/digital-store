import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store.js';
import { Provider } from 'react-redux';
import './index.css';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <ToastContainer position="top-center" autoClose={500} />
      <App />
    </Provider>
  </>
);
