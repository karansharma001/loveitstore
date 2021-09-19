import React, { Component } from "react";
import Category_item from "./Category_item";
import myImg from "./images/cat-one.jpg";
import myImg2 from "./images/cat-two.jpg";
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom'

import myImg3 from "./images/cat-three.jpg";

import "./home.css";
import Head_row from "./Head_row";

export class Category extends Component {
  imgData = [
    {
      Image: myImg3,
    },
    {
      Image: myImg,
    },
    {
      Image: myImg2,
    },
  ];

  render() {
    return (
      <>
        <div className="category">
        
          <Head_row headData="CATEGORIES" />
          <div id="cat">
            {this.imgData.map((item) => {
              return (
                <>
                  <Category_item photo={item.Image} />
                </>
              );
            })}
          </div>

          <Link to="/products"> <button className="btnn">All products</button></Link> 
        </div>
      </>
    );
  }
}

export default Category;
