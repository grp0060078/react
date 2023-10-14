function Hello(props) {
  
 
  return (
  
    <p>hello {props.username}</p>
  )
}
function App () {
  let user1 = 'sathish'
  let user2 = 'krish'
  let user3 = 'rithvik'
  let user4 = 'vijay'
  return (
   <div>
  <Hello username={user1}/>
  <Hello username={user2}/>
  <Hello username={user3}/>
  <Hello username={user4}/>
  </div>
    
  )
}

export default App;