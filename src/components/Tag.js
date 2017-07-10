import React, { Component } from 'react';

export class Tag extends Component {
  render(){
    return (
      <li>#{this.props.tagName}</li>
    );
  }
}