import React, { Component } from "react";
import Home_Products from "./Home_Products";
import myImgPro from "./images/cat-one.jpg";

import "./home.css";

export class Home_product_comp extends Component {
  render() {
    return (
      <div className="home-pro-cont">
        {this.props.productData.map((prodcuts) => {
          return (
            <Home_Products
              id={prodcuts.id}
              img={prodcuts.image}
              title={prodcuts.title}
              price={prodcuts.price}
            />
          );
        })}
      </div>
    );
  }
}

export default Home_product_comp;
