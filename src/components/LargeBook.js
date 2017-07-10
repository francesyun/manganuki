import React, { Component } from 'react';

export class LargeBook extends Component {
  render(){
  	let lastPage;
  	let background = {backgroundImage: 'url('+this.props.book.pages[this.props.pageIndex]+')'};
  	if (this.props.book.pages.length === this.props.pageIndex) {
  		background = {background: '#a90329', background: 'linear-gradient(rgb(103, 29, 80) 0%, rgb(0, 0, 0) 100%)'};
  		lastPage = (
  			<div className = "last-page noselect">
  				<img src={this.props.book.pages[0]} />
	  			<a href="#manga-title"><button className="arrow-down"></button></a>
	  			<p className="white">
	  				Scroll down for more info<br />& link to full manga
	  			</p>
  			</div>
  		);
  	}
    return (
      <div className="book large-book" 
           onClick={()=>this.props.onBookClick(this.props.book)}
           style={background}>
           {lastPage}
           <button className="close-icon noselect" onClick={this.props.onCloseClick}>
              <img src="img/close-icon.svg" />
           </button>
      </div>
    );
  }
}