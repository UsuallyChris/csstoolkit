import React from 'react';

function Slider(props) {
  return(
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.changeBorderRadius} type="number" name="" id=""/>
        <input type="submit" value="Change Border Radius"/>
      </form>
  );
}

export default Slider;