import React, { Component } from "react";
import "./home.css";
import Main_product_comp from "./Main_product_comp";

export class Main_Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catData: "All",
      itemData: this.props.itemData,
    };
  }

  handelCat = (event) => {
    this.setState({ catData: event.target.value });

    // this.setState({ catData: event.target.value });
    // if (this.state.catData != "All") {
    //   let filteredData = this.state.itemData.filter((item) => {
    //     return item.category == this.state.catData;
    //   });
    //   this.setState({ itemData: filteredData });
    // }
  };

  render() {
    return (
      <div className="main-product">
        <div className="main-product-head">
          <h1>PRODUCTS AVAILABLE</h1>
          <select
            name=""
            value={this.state.catData}
            onChange={this.handelCat}
            id="filter"
          >
            <option value="All">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
          </select>
        </div>

        <Main_product_comp mainData={this.state.itemData} />
      </div>
    );
  }
}

export default Main_Product;
