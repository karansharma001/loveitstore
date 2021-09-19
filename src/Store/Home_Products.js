import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./home.css";

export class Home_Products extends Component {
  linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  render() {
    return (
      <>
        <Link to={`/productDetail/${this.props.id}`} style={this.linkStyle}>
          <div className="home-product-item">
            <div id="product-img">
              <img src={this.props.img} alt="" />
            </div>

            <div>
              <p className="product-title">{this.props.title}</p>
              <p className="product-price">$ {this.props.price}</p>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default Home_Products;
