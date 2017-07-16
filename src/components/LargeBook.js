import React, { Component } from 'react';
import { FlipPage } from './FlipPage';

export class LargeBook extends Component {
  render(){
  	let pageAddOn;
  	let background = {backgroundImage: 'url('+this.props.book.pages[this.props.pageIndex]+')'};
  	if (this.props.book.pages.length === this.props.pageIndex) {
  		background = {background: '#a90329', background: 'linear-gradient(rgb(103, 29, 80) 0%, rgb(0, 0, 0) 100%)'};
  		pageAddOn = (
  			<div className = "last-page">
  				<img src={this.props.book.pages[0]} />
	  			<a href="#manga-title"><button className="arrow-down"></button></a>
	  			<p className="white">
	  				Scroll down for more info<br />& link to full manga
	  			</p>
  			</div>
  		);
  	} else if (this.props.pageIndex == 0) {
      pageAddOn = <FlipPage />;
    }
    return (
      <div className="book LargeBook noselect" 
           onClick={()=>this.props.onBookClick(this.props.book)}
           style={background}>
           {pageAddOn}
           <button className="close-icon" onClick={this.props.onCloseClick}>
              <img src="img/close-icon.svg" />
           </button>
      </div>
    );
  }
}