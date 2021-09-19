import React, { Component } from "react";
import "./home.css";

import { BrowserRouter, Route, Switch , Link} from 'react-router-dom'


export class Hero extends Component {
  render() {
    return (
      <>
        <div id="hero2">
          <div id="hero-text-box2">
            <p>EXPLORE THE SITE</p>
            <Link to="/products"><button id="hero-btn">All products</button></Link>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
