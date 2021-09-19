import React, { Component } from "react";
import "./home.css";

import { Link } from "react-router-dom";

export class Navbar extends Component {
  handelMnav = () => {
    let mNav = document.getElementById("nav-links");

    if (mNav.style.left != "0px") {
      mNav.style.left = "0px";
    } else {
      mNav.style.left = "-300px";
    }
  };
  render() {
    return (
      <>
        <header>
          <div className="top-cont">
            <div className="srch-box">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Search..." />
            </div>

            <div id="logo">
              <p>lovedIt.</p>
            </div>

            <div id="social-links">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>

              <div id="user">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                <a href="">Log In</a>
              </div>
            </div>
          </div>
        </header>

        <nav>
          <div id="logoM">
            <p>lovedIt.</p>
          </div>
          <ul id="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">All products</Link>
            </li>
            {/* <li>
              <Link to="/products">Categories</Link>
            </li> */}
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>

          <div>
            <i
              class="fa fa-bars"
              onClick={this.handelMnav}
              id="mbtn"
              aria-hidden="true"
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
