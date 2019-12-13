import React, { Component } from "react";
import { throwStatement } from "@babel/types";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: props.marvelProducts,
      total: props.totalPrice,
      basketComics: props.basketComics
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     basketComics: nextProps.basketComics
  //   });
  // }

  populateTableOfProducts() {
    let products = this.props.basketComics || [];
    return products.map((product, index) => {
      return (
        <tr className="basketProductsTableBodyRow" key={product.id}>
          <td className="times" align="center">
            {product.count} <span>X</span>{" "}
          </td>
          <td align="center">
            <img src={product.image}></img>
          </td>
          <td align="left">{product.seriesName + ": " + product.title}</td>
          <td align="center">{(product.count * product.price).toFixed(2)}$</td>
          <td className="buttons" align="center">
            <button
              className="btnDelete"
              onClick={() => this.props.removeFromBasket(product)} // poziva se pri kreiranju reda ?????
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="totalCost">
          <span className="totalCostTitle">TOTAL: </span>
          <span className="totalCostValue"> {this.props.totalPrice}$</span>
        </div>
        <div className="basketProducts">
          <table className="basketProductsTable">
            <tbody className="basketPsroductsTableBody">
              {this.populateTableOfProducts()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Basket;
