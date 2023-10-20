
import React, { useState, createContext, } from 'react';
import Profile from './components/profile.jsx'

const ProfileContext = createContext();


function App  ()  {
  
  const [profileName, setProfileName] = useState('');

  return (

    <ProfileContext.Provider value={{ profileName, setProfileName }}>
      <Profile />
    </ProfileContext.Provider>
  );
};




export { App as default, ProfileContext };
