import React from 'react';

function Object(props) {

  const borderRadius = parseInt(props.borderRadius);
  const styles = {
    height: 300,
    width: 300,
    backgroundColor: 'red',
    borderRadius: borderRadius
  }

  return(
    <div 
      className="renderObject"
      style={styles}
    />
  );
};

export default Object;