import React, { Component } from 'react';
 
class App extends Component {
  render() {
    const greeting = 'Welcome to React';
 
    return (
      <div>
        {isShow ? <Greeting greeting={greeting} /> : null}
 
        <Button />
      </div>
    );
  }
}
 
class Button extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isShow: true,
    };
  }
 
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };
 
  render() {
    return (
      <button onClick={this.toggleShow} type="button">
        Toggle Show
      </button>
    );
  }
}
 
const Greeting = ({ greeting }) => <h1>{greeting}</h1>;
 
export default App;