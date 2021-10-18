import React from 'react'

function ChoreChart(props) {
  return (
    <table>
      <thead> 
        <tr>
         
          {/* <th>Name</th> */}
         
        </tr>
        </thead> 
            {props.chores.map((v, i) => {
        return <tr>
          <th>{v[0]}</th>
          
        </tr>
      })}
    </table>
  );
}

export default ChoreChart;