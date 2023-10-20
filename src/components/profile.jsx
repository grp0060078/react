import React, { useContext } from 'react';
import { ProfileContext } from '../App';


function Profile ()  {
  
  const { profileName, setProfileName } = useContext(ProfileContext);

  
  const handleProfileNameChange = (event) => {
    setProfileName(event.target.value);
  };
  const pad={
    width:200,
    height:20,
    
  }

  return (
    <div>
      <h2> Profile Name</h2>
      <hr></hr>
    
      <input
        style={pad}
        type="text"
        placeholder='type name..'
        value={profileName}
        onChange={handleProfileNameChange}
      />
      <p>Profile Name: {profileName}</p>
    </div>
  );
};
export default Profile;