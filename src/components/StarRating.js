import React, { Component } from 'react';
import { Star } from './Star';

export class StarRating extends Component {
  render(){
  	let stars = [1,2,3,4,5].map((i)=><Star />);
	let starWidth = (this.props.starRating / 5)*100 + "%";

    return (
      <div className="StarRating">
		<div className="StarRating--top" style={{width: starWidth}}>
			{stars}
		</div>
		<div className="StarRating--bottom">
			{stars}
		</div>
	  </div>

    );
  }
}