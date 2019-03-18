import React, { Component } from 'react';

import Object from './object'

class BorderController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      objectStyles: {
        height: 300,
        width: 300,
        backgroundColor: 'red'
      },
    }
  }

  render() {
    return(
      <Object objectStyles={this.state.objectStyles}/>
    );
  }
}

export default BorderController;