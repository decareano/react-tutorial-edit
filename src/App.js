import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import ChoreChart from './ChoreChart';
import ChoreForm from './ChoreForm'


function App(props) {
  const [choreLogs, setChoreLogs] = useState([]);
  // // addChoreLog is a local variable that has the values of all the logs...you can call it pinga but if so, it needs to change line 19
  const addChoreLog = (log) => {
    //spread operator keeps tab of all entries..even though they dissapear after refreshing cuz there is no db
    let logs = [...choreLogs, log];
    
    setChoreLogs(logs);
  }

  const [name, setName] = useState();
    //const [date, setDate] = useState();
    const handleSubmit = (e) => {
      addChoreLog([name])
      e.preventDefault();
  }




  return (
    <form onSubmit={e => { handleSubmit(e) }}>
        {/* {/* <label>Chore description:</label>
        <br />
        <input 
          name='choreDesc' 
          type='text'
          value={choreDesc}
          // value has the choreDesc value and this is passed to the onChange event
          onChange={e => setChoreDesc(e.target.value)} */}
       
        <br/>
        <label>Name:</label>
        <br />
        <input 
          name='name' 
          type='text' 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        {/* <label>Date:</label>
        <br />
        <input
          name='date' 
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
        /> */}
        <br/>
        <input 
          type='submit' 
          value='Submit' 
        />

        <ChoreChart chores={choreLogs} />
     
      </form>

      
   
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;