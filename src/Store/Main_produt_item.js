import React, { Component } from "react";
import "./home.css";

import { Link } from "react-router-dom";

export class Main_produt_item extends Component {
  linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  render() {
    return (
      <div>
        <Link to={`/productDetail/${this.props.id}`} style={this.linkStyle}>
          <div className="m-item">
            <div className="left">
              <div className="m-img-cont">
                <img src={this.props.img} alt="" />
              </div>

              <div className="detail">
                <h3>{this.props.title}</h3>
                <p>{this.props.cat}</p>
                <p>{this.props.desc} ...</p>
              </div>
            </div>

            <div className="right">
              <p>$ {this.props.price}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Main_produt_item;
