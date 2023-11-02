import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

   const countReducer =(state=0,action) =>{
    switch(action.type){
        case "INCR":
            return state +1;

        case "DECR":
            return state -1;

        case "ZERO":
            return 0;  
            
        default:
            return state;    
    }
       
    
   }
   const store = createStore(countReducer);
   
   store.subscribe(() => {
       console.log(store.getState())
   })
   
   
  
   



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
);



