import React from 'react';

function Object() {

  const styles = {
    height: 300,
    width: 300,
    backgroundColor: 'red'
  }

  return(
    <div 
      className="renderObject"
      style={styles}
    />
  );
};

export default Object;