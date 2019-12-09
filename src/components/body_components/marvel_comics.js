import React, { Component } from "react";
import basket from "../../resources/50basket.png";
import eye from "../../resources/50view.ico";

class MarvelComics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: props.marvelProducts
    };
  }

  getImages = () => {
    var comicList = this.state.comics;
    return comicList.map(comic => (
      <div className="product">
        <div className="productCover">
          <img src={comic.image}></img>
        </div>
        <div className="productInfo">
          <h2>{comic.seriesName}</h2>
          <h3>{comic.title}</h3>
          <h3>Pirce: {comic.price}$</h3>
        </div>
        <div className="productBuy">
          <button className="btnAdd">
            <img src={eye}></img>
          </button>
          <button
            className="btnAdd"
            onClick={e => this.props.addToBasket(comic)}
          >
            <img src={basket}></img>
          </button>
        </div>
      </div>
    ));
  };

  render() {
    return <div className="products">{this.getImages()}</div>;
  }
}

export default MarvelComics;
