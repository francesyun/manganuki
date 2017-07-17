import React, { Component } from 'react';

export class StarRating extends Component {
  render(){

    return (
    <div className="StarRating">
      <span className="StarRating__star">★</span>
	  <span className="StarRating__text--rating">{this.props.starRating}</span>
	  <span className="StarRating__text--numRatings">
	  	(<a href={this.props.link} target="_blank">{this.props.numRatings}</a>)
	  </span>
    </div>
    );
  }
}