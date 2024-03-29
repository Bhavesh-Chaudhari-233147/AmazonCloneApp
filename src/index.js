import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer,{initialState} from './Components/StateProvider/reducer';
import { StateProvider } from './Components/StateProvider/StateProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
);

reportWebVitals();
