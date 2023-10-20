import React, { createContext, useState } from 'react';
import profile from './components/profile.jsx';


const MessageContext = createContext();

function App() {

    
    const [message, setMessage] = useState('');
    

  return (
      <div>
          <h1>ProfileName</h1>
          <hr></hr>
          
          <MessageContext.Provider value={{message,}}>
              <profile />
          </MessageContext.Provider>
    </div>
  )
}


export { App as default, MessageContext };