import React, { Component } from 'react';

import Object from './object';
import Slider from './slider';

class BorderController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      borderRadiusAll: 10,
      borderRadiusTopLeft: 10,
      borderRadiusTopRight: 10,
      borderRadiusBottomRight: 10,
      borderRadiusBottomLeft: 10
      }

    this.changeAllBorderRadius = this.changeAllBorderRadius.bind(this);
    this.changeTopLeftBorderRadius = this.changeTopLeftBorderRadius.bind(this);
    this.changeTopRightBorderRadius = this.changeTopRightBorderRadius.bind(this);
    this.changeBottomRightBorderRadius = this.changeBottomRightBorderRadius.bind(this);
    this.changeBottomLeftBorderRadius = this.changeBottomLeftBorderRadius.bind(this);
    this.setAll = this.setAll.bind(this);
    }

  setAll(event) {
    
  }

  changeAllBorderRadius(event) {
    this.setState({
      borderRadiusAll: event.target.value,
      borderRadiusTopLeft: event.target.value,
      borderRadiusTopRight: event.target.value,
      borderRadiusBottomRight: event.target.value,
      borderRadiusBottomLeft: event.target.value
    })
  }

  changeTopLeftBorderRadius(event) {
    this.setState({
      borderRadiusTopLeft: event.target.value
    })
  }

  changeTopRightBorderRadius(event) {
    this.setState({
      borderRadiusTopRight: event.target.value
    })
  }

  changeBottomRightBorderRadius(event) {
    this.setState({
      borderRadiusBottomRight: event.target.value
    })
  }

  changeBottomLeftBorderRadius(event) {
    this.setState({
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
          borderRadiusAll={this.state.borderRadiusAll}
          borderRadiusTopLeft={this.state.borderRadiusTopLeft}
          borderRadiusTopRight={this.state.borderRadiusTopRight}
          borderRadiusBottomRight={this.state.borderRadiusBottomRight}
          borderRadiusBottomLeft={this.state.borderRadiusBottomLeft}
          changeAllBorderRadius={this.changeAllBorderRadius}
          changeTopLeftBorderRadius={this.changeTopLeftBorderRadius}
          changeTopRightBorderRadius={this.changeTopRightBorderRadius}
          changeBottomRightBorderRadius={this.changeBottomRightBorderRadius}
          changeBottomLeftBorderRadius={this.changeBottomLeftBorderRadius}
        />
      </div>
    );
  }
}

export default BorderController;