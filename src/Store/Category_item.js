import React, { Component } from "react";
import "./home.css";

export class Category_item extends Component {
  render() {
    return (
      <div>
        <div className="cat-card">
          <img src={this.props.photo} alt="" />
        </div>
      </div>
    );
  }
}

export default Category_item;
