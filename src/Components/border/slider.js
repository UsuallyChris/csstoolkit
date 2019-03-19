import React from 'react';

function Slider(props) {
  return(
      <form>
        <input onChange={props.changeAllBorderRadius} type="number" name="" id="" />
        <input onChange={props.changeTopLeftBorderRadius} value={props.borderRadiusTopLeft} type="number" name="" id="" />
        <input onChange={props.changeTopRightBorderRadius} value={props.borderRadiusTopRight} type="number" name="" id="" />
        <input onChange={props.changeBottomRightBorderRadius} value={props.borderRadiusBottomRight} type="number" name="" id="" />
        <input onChange={props.changeBottomLeftBorderRadius} value={props.borderRadiusBottomLeft} type="number" name="" id="" />
      </form>
  );
}

export default Slider;