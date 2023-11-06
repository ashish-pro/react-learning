import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "Iphone 13 Pro Silver 128 GB",
        image:
          "data:image/webp;base64,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",
        price: 45000,
        qty: 1,
      },
    };
  }
  incrementHandler = () => {
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        qty: prevState.product.qty + 1,
      },
    }));
  };
  decrementHandler = () => {
    if (this.state.product.qty > 1) {
      this.setState((prevState) => ({
        product: {
          ...prevState.product,
          qty: prevState.product.qty - 1,
        },
      }));
    }
  };
  render() {
    const { name, image, price, qty } = this.state.product;
    return (
      <div className="d-flex justify-content-center mt-5 ">
        <div
          className="card justify-center"
          style={{ width: "18rem", padding: "5px", borderRadius: "10px" }}
        >
          <img
            src={image}
            className="card-img-top"
            style={{ borderRadius: "10px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <span>Price: {price} </span>
            </p>
            <button
              onClick={this.incrementHandler}
              type="button"
              className="btn btn-dark mx-2"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span className="mx-2">{qty}</span>
            <button
              onClick={this.decrementHandler}
              type="button"
              className="btn btn-dark mx-2"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className="card-body">
            <h3>
              <span className="text-muted">
                Total Price: {price * qty}
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
