import React from "react";
import logo from "./logo.svg";
import "./scss/main.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import MarvelComics from "./components/body_components/marvel_comics";
import DCComics from "./components/body_components/dc_comics";
import Contact from "./components/body_components/contact";
import Navbar from "./components/header_components/navbar";
import Home from "./components/body_components/home";
import Basket from "./components/body_components/basket";

var marvelComics = [
  {
    id: "comic1",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/772889/772889._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #1",
    title: "Know Fear 1",
    price: 3.5,
    count: 1
  },
  {
    id: "comic2",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/736597/736597._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #2",
    title: "Know Fear 2",
    price: 3.5,
    count: 1
  },
  {
    id: "comic3",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/744276/744276._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #3",
    title: "Know Fear 3",
    price: 3.75,
    count: 1
  },
  {
    id: "comic4",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/750629/750629._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #4",
    title: "Know Fear 4",
    price: 3.99,
    count: 1
  },
  {
    id: "comic5",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/758777/758777._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #5",
    title: "Know Fear 5",
    price: 3.99,
    count: 1
  },
  {
    id: "comic6",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/758782/758782._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #6",
    title: "No Devils Only God 1",
    price: 3.75,
    count: 1
  },
  {
    id: "comic7",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/806684/806684._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #7",
    title: "No Devils Only God 2",
    price: 3.5,
    count: 1
  },
  {
    id: "comic8",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/771609/771609._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #8",
    title: "No Devils Only God 3",
    price: 3.99,
    count: 1
  },
  {
    id: "comic9",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/781324/781324._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #9",
    title: "No Devils Only God 4",
    price: 3.99,
    count: 1
  },
  {
    id: "comic10",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/786323/786323._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #10",
    title: "Trough Hell 1",
    price: 3.75,
    count: 1
  },
  {
    id: "comic11",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/781329/781329._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #11",
    title: "Trough Hell 2",
    price: 3.75,
    count: 1
  },
  {
    id: "comic12",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/794481/794481._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #12",
    title: "Trough Hell 3",
    price: 3.99,
    count: 1
  },
  {
    id: "comic13",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/800994/800994._SX270_QL80_TTD_.jpg",
    seriesName: "Daredevil #13",
    title: "Trough Hell 4",
    price: 3.75,
    count: 1
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marvelProducts: marvelComics,
      basketComics: 0,
      totalPrice: 0,
      numberOfProductsInBasket: 0,
      numberOfOneComic: 0
    };
  }

  componentDidMount() {
    this.changeBasket();
  }

  removeFromBasket = comic => {
    debugger;
    var storageArray = JSON.parse(localStorage.getItem("storageArray") || "[]");
    let p = storageArray.find(x => x === comic.id);
    let ind = storageArray.indexOf(p);
    storageArray.splice(ind, 1);
    localStorage.setItem("storageArray", JSON.stringify([...storageArray])); //, comic.id
    this.changeBasket();
  };

  addToBasket = comic => {
    var storageArray = JSON.parse(localStorage.getItem("storageArray") || "[]");
    localStorage.setItem(
      "storageArray",
      JSON.stringify([...storageArray, comic.id])
    );
    this.changeBasket();
  };

  changeBasket = () => {
    let fullPrice = 0;
    let allComics = this.state.marvelProducts;
    let display = [];
    let prices = [];
    const chosenComics = JSON.parse(
      localStorage.getItem("storageArray") || "[]"
    );
    for (var x = 0; x < allComics.length; x++) {
      if (chosenComics.includes(allComics[x].id)) {
        let c = Object.assign({}, allComics[x]);
        let filterdList = chosenComics.filter(p => p === c.id);
        c.count = filterdList.length;
        display.push(c);
        prices.push(c.count * allComics[x].price);
      }
    }
    fullPrice = prices.reduce(this.reduceThePrices, 0);

    this.setState({
      totalPrice: fullPrice.toFixed(2),
      basketComics: display,
      numberOfProductsInBasket: chosenComics.length
    });
  };

  reduceThePrices = (total, num) => {
    return total + num;
  };

  toggleActive = () => {
    // let activeClass = this.state.isActive;
    // if (activeClass) {
    //   this.setState = {
    //     className: this.state.className + " activePage"
    //   };
    // } else {
    //   this.setState = {
    //     className: "navbarElement"
    //   };
    // }
    // this.setState = {
    //   className: "navbarElement activePage"
    // };
    // console.log(this.state.className);
  };

  render() {
    return (
      <div className="menu">
        <BrowserRouter>
          <Navbar
            numberOfProductsInBasket={this.state.numberOfProductsInBasket}
          />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/marvel_comics"
              component={() => (
                <MarvelComics
                  marvelProducts={this.state.marvelProducts}
                  addToBasket={this.addToBasket}
                />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route
              path="/basket"
              component={() => (
                <Basket
                  basketComics={this.state.basketComics}
                  totalPrice={this.state.totalPrice}
                  removeFromBasket={this.removeFromBasket}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
