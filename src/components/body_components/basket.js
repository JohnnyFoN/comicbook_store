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

  componentWillReceiveProps(nextProps) {
    this.setState({
      basketComics: nextProps.basketComics
    });
  }

  populateTableOfProducts() {
    let products = this.state.basketComics || [];
    return products.map((product, index) => {
      return (
        <tr className="basketProductsTableBodyRow">
          <td align="center">
            <img src={product.image}></img>
          </td>
          <td align="left">{product.seriesName + ": " + product.title}</td>
          <td align="center">{product.price}$</td>
          <td className="buttons" align="center">
            <button
              className="btnDelete"
              // onClick={e => this.props.removeFromBasket(product.id)}
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
          <span className="totalCostValue"> {this.state.total}$</span>
          {/* <button className="totalCostDeleteAll">Empty the basket</button> */}
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
