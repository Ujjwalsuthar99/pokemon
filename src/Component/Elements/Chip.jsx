import React from 'react';

class Chip extends React.Component {
  render() {
    const { label, color } = this.props;

    const chipStyle = {
      display: 'inline-flex',
      borderRadius: '100px',
      backgroundColor: color,
      color: 'white',
      padding: '0.5rem .5rem',
      margin: '0.5rem',
      fontSize: '0.8rem',
      fontWeight: 'bolder',
      justifyContent: 'center',
      alignItems: 'center',
      width: '4.4rem', // set a fixed width for the chip
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      transform: 'translateX(-440%)', // slide left by 25%
    };

    return (
      <div style={chipStyle}>
        {label}
        {/* <p style={{textAlign: 'center'}}>{label}</p> */}
        {/* <div style={{textAlign: 'center'}}>{label}</div> */}
      </div>
    );
  }
}

export default Chip;