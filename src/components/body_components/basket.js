import React, { Component } from "react";
import { throwStatement } from "@babel/types";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: props.marvelProducts,
      total: 0,
      basketComics: []
    };
  }

  componentDidMount() {
    var totalPrice = 0;
    var allComics = this.state.comics;
    var display = [];
    const chosenComics = JSON.parse(
      localStorage.getItem("storageArray") || "[]"
    );
    for (var x = 0; x < allComics.length; x++) {
      for (var y = 0; y < chosenComics.length; y++) {
        if (allComics[x].id === chosenComics[y]) {
          display.push(allComics[x]);
          totalPrice += allComics[x].price;
        }
      }
    }
    console.log(display);
    this.setState({
      basketComics: display,
      total: totalPrice
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
            <button className="btnDelete">X</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="basketProducts">
        <table className="basketProductsTable">
          <tbody className="basketPsroductsTableBody">
            {this.populateTableOfProducts()}
          </tbody>
        </table>
        <div>
          <span>TOTAL: {this.state.total}$</span>
        </div>
      </div>
    );
  }
}

export default Basket;
