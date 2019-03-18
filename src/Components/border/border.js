import React, { Component } from 'react';

import Object from './object';
import Slider from './slider';

class BorderController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      borderRadius: 0
      }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeBorderRadius = this.changeBorderRadius.bind(this);
    }

  handleSubmit(event) {
    event.preventDefault();
  }

  changeBorderRadius(event) {
    this.setState({
      borderRadius: event.target.value
    })
  }

  render() {
    return(
      <div className="container">
        <Object borderRadius={this.state.borderRadius} />
        <Slider 
          handleSubmit={this.handleSubmit}
          changeBorderRadius={this.changeBorderRadius}
        />
      </div>
    );
  }
}

export default BorderController;