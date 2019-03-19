import React from 'react';

function Object(props) {

  const borderRadiusTopLeft = parseInt(props.borderRadiusTopLeft);
  const borderRadiusTopRight = parseInt(props.borderRadiusTopRight);
  const borderRadiusBottomRight = parseInt(props.borderRadiusBottomRight);
  const borderRadiusBottomLeft = parseInt(props.borderRadiusBottomLeft);

  const styles = {
    height: 300,
    width: 300,
    backgroundColor: 'red',
    borderTopLeftRadius: borderRadiusTopLeft,
    borderTopRightRadius: borderRadiusTopRight,
    borderBottomRightRadius: borderRadiusBottomRight,
    borderBottomLeftRadius: borderRadiusBottomLeft,
  }

  return(
    <div 
      className="renderObject"
      style={styles}
    />
  );
};

export default Object;