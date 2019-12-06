import React, { Component } from "react";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: props.marvelProducts,
      total: 0
    };
  }

  componentDidMount() {
    const chosenComics = JSON.parse(
      localStorage.getItem("storageArray") || "[]"
    );
    console.log(chosenComics);
  }

  populateTableOfProducts() {
    let products = this.state.comics || [];
    return products.map((product, index) => {
      //const { userId, title, body, id } = post;key={id}
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
