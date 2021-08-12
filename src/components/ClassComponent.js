import React, { Component } from "react";
import Form from "./Form";
import isValid from "./validation";

import "./style.css";

const tax = 1.25;
const selectOptions = [5, 10, 15, 20];
const selectDefaultOption = selectOptions[1];

class ClassComponent extends Component {
  state = {
    price: "",
    finalPrice: "",
    tip: selectDefaultOption,
  };

  handlePriceInputChange = (e) =>
    this.setState({
      price: e.target.value,
    });

  handleTipChange = (e) =>
    this.setState({
      tip: e.target.value,
    });

  handleClick = () => {
    isValid(this.state.price);
    const priceGross =
      parseInt(this.state.price) * tax + parseInt(this.state.tip);
    this.setState({ finalPrice: priceGross });
  };

  handleGoBackClick = () => {
    this.setState({
      price: "",
      tip: selectDefaultOption,
      finalPrice: "",
    });
  };

  render() {
    const optionElements = selectOptions.map((option) => (
      <option key={option} value={option}>
        {option}%
      </option>
    ));
    return (
      <>
        {!this.state.finalPrice && (
          <Form
            options={optionElements}
            price={this.state.price}
            handlePrice={this.handlePriceInputChange}
            tip={this.state.tip}
            handleTipChange={this.handleTipChange}
            handleClick={this.handleClick}
          />
        )}

        {this.state.finalPrice && (
          <>
            <p>{`final price: ${this.state.finalPrice}`}</p>
            <button onClick={this.handleGoBackClick} className="formButton">
              back
            </button>
          </>
        )}
      </>
    );
  }
}

export default ClassComponent;
