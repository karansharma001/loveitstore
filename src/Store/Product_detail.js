import React from "react";
import { useParams } from "react-router";
import "./home.css";

function Product_detail(props) {
  const { id } = useParams();

  let mainData = props.productDetail.filter((item) => {
    return item.id == id;
  });

  let mainDataInfo = mainData[0];
  // console.log(mainDataInfo.image);

  return (
    <>
      <div className="product-detail">
        <div className="product-img-box">
          <img src={mainDataInfo.image} alt="" />
        </div>

        <div className="product-info">
          <h1>{mainDataInfo.title}</h1>
          <p>{mainDataInfo.category}</p>
          <h3 className="price">$ {mainDataInfo.price}</h3>

          <div className="quantity-box">
            <p>Quantity</p>
            <input type="number" placeholder="1" />
          </div>

          <div className="order-info">
            <button className="order-btn">Add to cart</button>
          </div>

          <div className="pro-det">
            <h3>Product Detail</h3>
            <p>{mainDataInfo.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_detail;
