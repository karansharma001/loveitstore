import React, { Component } from "react";
import Category from "./Category";
import HeroTwo from "./Hero";
import Hero from "./HeroTwo";
import Home_product_comp from "./Home_product_comp";

export class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Category />
        <Home_product_comp productData={this.state.data.slice(0, 8)} />
        <HeroTwo />
      </div>
    );
  }
}

export default Home;
