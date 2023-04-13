
import React, { Component } from 'react'
import logo from '../../logo.svg';
export default class Title extends Component {
  render() {
    return (
      <div>
        <img src={logo} height={'100px'} width={'100px'}/>
        <div class ="title">{this.props.name} </div>
      </div>
    )
  }
}
