import React from 'react';

function Slider(props) {
  return(
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.changeAllBorderRadius} type="number" name="" id="" />
        <input onChange={props.changeTopLeftBorderRadius} type="number" name="" id="" />
        <input onChange={props.changeTopRightBorderRadius} type="number" name="" id="" />
        <input onChange={props.changeBottomRightBorderRadius} type="number" name="" id="" />
        <input onChange={props.changeBottomLeftBorderRadius} type="number" name="" id="" />
      </form>
  );
}

export default Slider;