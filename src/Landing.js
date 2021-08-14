// Landing.js

import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import logo from './assets/homerBP.jpg'
import config from './config'
import Table from './Table'
import TableHeader from './Table'
import TableBody from './Table'
import Form from './Form'
import Firebase from 'firebase'

class Landing extends Component {
    constructor(props) {
        super(props)
        Firebase.initializeApp(config);
        this.state = {
          characters: []
        }
    }
    
    getUserData = () => {
        let ref = Firebase.database().ref("/");
        console.log(ref)
        ref.on("value", snapshot => {
          const state = snapshot.val();
          console.log(state)
          this.setState(state);
          console.log(state)
          
        });
        console.log('Data retrieved')
    };
    
    componentDidMount() {
        this.getUserData()
    }

    componentWillUnmount() {
        this.getUserData()
    }

    
  render() {
    const {characters} = this.state
    return (
        <div>
          <h2>Welcome to Marcelo's Blood Pressure Readings</h2>
          <p>Please select a link above:</p>
            
            <div class="col">
              <img src={logo} alt="test" />
            </div>
            <h1>Three Last Readings</h1>
            
            <Table characterData={characters} getUserData={this.getUserData} />
        </div>
        
    );

  }
  
}

export default Landing;