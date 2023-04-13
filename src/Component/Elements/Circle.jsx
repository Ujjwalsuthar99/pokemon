import React from 'react';

const Circle = ({ diameter, color, name }) => {
  const circleStyle = {
    width: diameter,
    height: diameter,
    borderRadius: '50%',
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bolder',
    color: 'black',
    margin: 'auto', // center the circle element
  };

  return (
    <div style={circleStyle}>
      <img src={`${name}`} height={90} weight={90}/>
      {/* <p style={{fontSize: 15}}>{name}</p> */}
    </div>
  );
};

export default Circle;