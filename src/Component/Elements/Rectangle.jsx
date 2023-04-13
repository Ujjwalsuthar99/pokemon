import React from 'react';

class RectangleBox extends React.Component {
  render() {
    const parentBoxStyle = {
      width: '300px',
      height: '200px',
      backgroundColor: '#eee',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      boxSizing: 'border-box',
    };

    const childBoxStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: '#888',
    };

    return (
      <div style={parentBoxStyle}>
        <div style={childBoxStyle}></div>
        <div style={childBoxStyle}></div>
      </div>
    );
  }
}

export default RectangleBox;