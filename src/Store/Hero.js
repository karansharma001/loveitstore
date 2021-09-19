import React, { Component } from "react";
import "./home.css";

import { BrowserRouter, Route, Switch , Link} from 'react-router-dom'

export class HeroTwo extends Component {
  render() {
    return (
      <>
        <div id="hero">
          <div id="hero-text-box">
            <p>CUE THE COLOR</p>
            <Link to="/products"><button id="hero-btn">All products</button></Link>
          </div>
        </div>
      </>
    );
  }
}

export default HeroTwo;
