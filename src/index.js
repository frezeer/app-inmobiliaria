import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './server';



//import { initialState } from './componenentes/sesion/initialState';
//import { StateProvider } from './componenentes/sesion/store';
//import { sesionReducer } from './componenentes/sesion/reducers/sesionReducer';



//const FirebaseContext = React.createContext();
//<StateProvider initialState={initialState} reducer={sesionReducer} >
//</StateProvider>

ReactDOM.render(
  <React.StrictMode>
  <FirebaseContext.Provider value={new Firebase()} >
      
      
            <App />
      

  </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
