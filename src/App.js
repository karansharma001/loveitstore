import React, { Component } from "react";

import Footer from "./Store/Footer";
import Navbar from "./Store/Navbar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./Store/Hero";
import Category from "./Store/Category";
import HeroTwo from "./Store/HeroTwo";
import Home_product_comp from "./Store/Home_product_comp";
import Main_Product from "./Store/Main_Product";
import Product_detail from "./Store/Product_detail";
import Cart from "./Store/Cart";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "https://fakestoreapi.com/products",
      data: [],
    };
  }

  async componentDidMount() {
    let rawData = await fetch(this.state.url);
    let parsedData = await rawData.json();
    this.setState({ data: parsedData });
    // console.log(this.state.data);
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Category />
            <Home_product_comp productData={this.state.data.slice(0, 8)} />
            <HeroTwo />
          </Route>
          <Route path="/products">
            <Main_Product itemData={this.state.data} />
          </Route>

          <Route path="/productDetail/:id">
            <Product_detail productDetail={this.state.data} />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />

        {/* 
        <Navbar/>
        <Hero/> */}
      </>
    );
  }
}

export default App;
