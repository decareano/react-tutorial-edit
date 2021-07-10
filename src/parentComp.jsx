import React, { Component } from 'react';
import FirstChild from './firstChild'

class ParentComp extends Component {
  render() {
    return <h1>I'm the parent component.
    <FirstChild />
    </h1>
  }
}
export default ParentComp;