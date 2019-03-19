import React, { Component } from 'react';

import Object from './object';
import Slider from './slider';

class BorderController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      borderRadiusTopLeft: 0,
      borderRadiusTopRight: 0,
      borderRadiusBottomRight: 0,
      borderRadiusBottomLeft: 0
      }

    this.changeAllBorderRadius = this.changeAllBorderRadius.bind(this);
    }

  changeAllBorderRadius(event) {
    this.setState({
      borderRadiusTopLeft: event.target.value,
      borderRadiusTopRight: event.target.value,
      borderRadiusBottomRight: event.target.value,
      borderRadiusBottomLeft: event.target.value
    })
  }

  render() {
    return(
      <div className="container">
        <Object
          borderRadiusTopLeft={this.state.borderRadiusTopLeft}
          borderRadiusTopRight={this.state.borderRadiusTopRight}
          borderRadiusBottomRight={this.state.borderRadiusBottomRight}
          borderRadiusBottomLeft={this.state.borderRadiusBottomLeft}
        />
        <Slider
          changeAllBorderRadius={this.changeAllBorderRadius}
        />
      </div>
    );
  }
}

export default BorderController;