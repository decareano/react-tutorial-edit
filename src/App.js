import React, { useState } from 'react';

import ChoreChart from './ChoreChart';
import ChoreForm from './ChoreForm'

const App = () => {
  
    const [choreLogs, setChoreLogs] = useState([]);
      // addChoreLog is a local variable that has the values of all the logs...you can call it pinga but if so, it needs to change line 19
      const addChoreLog = (log) => {
        //spread operator keeps tab of all entries..even though they dissapear after refreshing cuz there is no db
        let logs = [...choreLogs, log];
        console.log(logs)
        setChoreLogs(logs);
    }

 
    return (
      
      <section>
      {/* // passing ChoreForm below which was imported at the top of the file. 
      // addChoreLog is a variable in ChoreForm.js. it's inside a function called handleSubmit. 
      // if you want to change it you have to make the change on ChoreForm file as well
      */}
      <ChoreForm addChoreLog={addChoreLog}/>
      <ChoreChart chores={choreLogs}/>
    </section>
     
    );
  
}

export default App