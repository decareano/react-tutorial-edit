import React, { Component, useState } from 'react';

 
const App = () => {
  
    
    return (
      <div>
        {/* //passing an object...instead of a string */}
        <Greeting greeting={{ text: "Welcome to Reactingo" }}/>
      </div>
    );
  
}
 
const Greeting = ({greeting}) => {
 
    //below is static data; we want to pass dynamic data instead. how?
    
 
    return <h1>{greeting.text}</h1>;
  
}
 
export default App;

// we started with below code and end up with above code:

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Greeting />
//       </div>
//     );
//   }
// }
 
// class Greeting extends Component {
//   render() {
//     const greeting = 'Welcome to React';
 
//     return <h1>{greeting}</h1>;
//   }
// }