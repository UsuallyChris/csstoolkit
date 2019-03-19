import React from 'react';

function Slider(props) {
  return(
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.changeAllBorderRadius} type="number" name="" id=""/>
      </form>
  );
}

export default Slider;