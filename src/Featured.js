import React, { Component } from 'react';
import { LargeBook } from './components/LargeBook';
import { Tag } from './components/Tag';
import { StarRating } from './components/StarRating';

export class Featured extends Component {
  render() {
    let featured;
    let { clickedBook, onBookClick, onCloseClick, pageIndex } = this.props;
    if (clickedBook){
      let tags = clickedBook.tags.map((tag)=><Tag tagName={tag} />);
      let tanukiRating = "hmm..";
      if (clickedBook.reviews[0]) {
        switch(clickedBook.reviews[0].rating) {
          case 5:
            tanukiRating = "5 - my personal favorite"
            break;
          case 4:
            tanukiRating = "4 - very good"
            break;
          case 3:
            tanukiRating = "3 - you'll probably like it"
            break;
          case 2:
            tanukiRating = "2 - kinda bad"
            break;
        }
      }
      featured = (
        <div>
          <LargeBook book={clickedBook} onBookClick={onBookClick}  onCloseClick={onCloseClick} pageIndex={pageIndex} />
          <h2 id="manga-title">{clickedBook.name}</h2>
          <ul className="tags">{tags}</ul>
          <div className="manga-about">
            <StarRating starRating={clickedBook.mangahere_rating} numRatings={clickedBook.mangahere_numRatings} />
            <p><span className="red">Description: </span>{clickedBook.description}</p>
            <p><img src="./img/manganuki-avatar.svg" alt="avatar" style={{marginRight: 5}} /><span className="red">Manganuki says: </span>{clickedBook.reviews[0].text} Rating: {tanukiRating}</p>
          </div>
          <a href={clickedBook.link} target="_blank">
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