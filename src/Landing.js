// Landing.js

import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import logo from './assets/homerBP.jpg'

class Landing extends Component {
  render() {
    return (
        <div>
          <h2>Welcome to Marcelo's Blood Pressure Readings</h2>
          <p>Please select a link above:</p>
          <Col>
              <img src={logo} alt="test" width="180" height="350"/>
            </Col>
        </div>
    );
  }
}

export default Landing;