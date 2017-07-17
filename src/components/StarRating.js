import React, { Component } from 'react';
import { Star } from './Star';

export class StarRating extends Component {
  render(){
  	let stars = [1,2,3,4,5].map((i)=><Star />);
	let starWidth = (this.props.starRating / 5)*100 + "%";

    return (
    <div className="StarRating">
      <div className="StarRating__stars">
		<div className="StarRating__stars--top" style={{width: starWidth}}>
			{stars}
		</div>
		<div className="StarRating__stars--bottom">
			{stars}
		</div>
	  </div>
	  <div className="StarRating__text">
		<span className="StarRating__text--rating">{this.props.starRating}</span>
		<span className="StarRating__text--numRatings">({this.props.numRatings})</span>
	  </div>
    </div>
    );
  }
}