import React, { Component } from "react";
import "./home.css";
import Main_produt_item from "./Main_produt_item";

export class Main_product_comp extends Component {
  render() {
    return (
      <div>
        {this.props.mainData.map((item) => {
          return (
            <Main_produt_item
              id={item.id}
              img={item.image}
              title={item.title}
              cat={item.category}
              price={item.price}
              desc={item.description.slice(0, 124)}
            />
          );
        })}
      </div>
    );
  }
}

export default Main_product_comp;
