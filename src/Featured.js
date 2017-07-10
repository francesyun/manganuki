import React, { Component } from 'react';
import { LargeBook } from './components/LargeBook';
import { Tag } from './components/Tag';

export class Featured extends Component {
  render() {
    let featured;
    if (this.props.clickedBook){
      let tags = this.props.clickedBook.tags.map((tag)=><Tag tagName={tag} />);
      featured = (
        <div>
          <LargeBook book={this.props.clickedBook} onBookClick={this.props.onBookClick}  onCloseClick={this.props.onCloseClick} pageIndex={this.props.pageIndex} />
          <h2 id="manga-title">{this.props.clickedBook.name}</h2>
          <ul className="tags">{tags}</ul>
          <div className="manga-about">
            <p><span className="red">My take: </span>{this.props.clickedBook.reviews[0].text}</p>
            <p><span className="red">Description: </span>{this.props.clickedBook.description}</p>
          </div>
          <a href={this.props.clickedBook.link} target="_blank">
            <button style={{marginTop: 15}}>read full manga</button>
          </a>
        </div>
      )
    } else {
      featured = (
        <div style={{marginBottom: 60}}>
          <img src="img/logo.svg" className="logo" alt="logo" />
          <h1 className="font-righteous main-heading">Manganuki</h1>
          <h5 className="sub-heading">quick previews of great manga</h5>
          <ol className="instructions">
            <li>click a manga cover</li>
            <li>keep clicking to preview</li>
            <li>read on or try another!</li>
          </ol>
        </div>
      )
    }
    return (
      <div className="featured">
        {featured}

        <div className="footer">
          <p>Got feedback? Manga suggestions? Email me!</p>
          <p><a href="mailto:hi.manganuki@gmail.com?subject=Hey!">hi.manganuki@gmail.com</a></p>
        </div>
      </div>
    );
  }
}