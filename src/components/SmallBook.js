import React, { Component } from 'react';
import { Tag } from './Tag';
import { FlipPage } from './FlipPage';

export class SmallBook extends Component {
  render(){
  	/* only show first 3 tags */
  	let tags = this.props.book.tags.slice(0, 2).map((tag)=><Tag tagName={tag} />);
    let selectedBook = (this.props.book === this.props.selectedBook ? " selected-book" : "");
    return (
      <div className={"book small-book noselect" + selectedBook}
           onClick={()=>this.props.onBookClick(this.props.book)}
           style={{backgroundImage:'url('+this.props.book.pages[0] +')'}}>
           <div className="small-book-info">
           		<h5>{this.props.book.name}</h5>
           		<ul className="tags">{tags}</ul>
              <div className = "page-flip"><button>flip page</button></div>
           </div>
           <FlipPage />
           <button className="close-icon noselect" onClick={this.props.onCloseClick}>
              <img src="img/close-icon.svg" />
           </button>
      </div>
    );
  }
}