import React, { Component } from "react";
import './home.css'

export class Cart extends Component {
  render() {
    return (
      <div>
        <div id="cart-box">
          <table>
            <tr id="maintr">
              <th>Product</th>
              <th>Quantity</th>
              <th>SubTotal</th>
            </tr>

            <tr id="cc">
              <td class="detail">
                <div class="product-detail-card">
                  <img src="/images/buy-1.jpg" alt="" />
                  <div class="cart-text">
                    <h4>Red T- Shirt </h4>
                    <p>Price: $50.00</p>
                    <span>Remove</span>
                  </div>
                </div>
              </td>

              <td class="input">
                <input type="text" class="cart-in" />
              </td>

              <td class="total">
                <h3>$50.00</h3>
              </td>
            </tr>

            <tr id="cc">
              <td class="detail">
                <div class="product-detail-card">
                  <img src="/images/buy-2.jpg" alt="" />
                  <div class="cart-text">
                    <h4>Red T- Shirt </h4>
                    <p>Price: $50.00</p>
                    <span>Remove</span>
                  </div>
                </div>
              </td>

              <td class="input">
                <input type="text" class="cart-in" />
              </td>

              <td class="total">
                <h3>$50.00</h3>
              </td>
            </tr>

            <tr id="cc">
              <td class="detail">
                <div class="product-detail-card">
                  <img src="/images/buy-3.jpg" alt="" />
                  <div class="cart-text">
                    <h4>Red T- Shirt </h4>
                    <p>Price: $50.00</p>
                    <span>Remove</span>
                  </div>
                </div>
              </td>

              <td class="input">
                <input type="text" class="cart-in" />
              </td>

              <td class="total">
                <h3>$50.00</h3>
              </td>
            </tr>

            <tr id="cc">
              <td class="detail">
                <div class="product-detail-card">
                  <img src="/images/buy-2.jpg" alt="" />
                  <div class="cart-text">
                    <h4>Red T- Shirt </h4>
                    <p>Price: $50.00</p>
                    <span>Remove</span>
                  </div>
                </div>
              </td>

              <td class="input">
                <input type="text" class="cart-in" />
              </td>

              <td class="total">
                <h3>$50.00</h3>
              </td>
            </tr>

            <tr class="last">
              <td></td>
              <td class="last-det">
                <p>SubTotal</p>
                <p>Tax</p>
                <p>Total</p>
              </td>

              <td class="last-amt">
                <p>$50.00</p>
                <p>$50.00</p>
                <p>$50.00</p>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td id="checkBtn">
                <button id="check">Checkout</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
