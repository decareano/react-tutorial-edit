import React from 'react';
import { useState } from 'react';

  function ChoreForm({ addChoreLog }) {
    //each input needs an onChange event to update state on each chore via useState hook
    // we will have to pass it the event target (ie: choreDesc ) via value 
    //const [choreDesc, setChoreDesc] = useState();
    const [name, setName] = useState();
    //const [date, setDate] = useState();
    const handleSubmit = (e) => {
      addChoreLog([ name])
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
      </form>
    )
  }

  export default ChoreForm;