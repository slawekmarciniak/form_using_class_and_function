import React, { useState } from "react";
import Form from "./Form";
import isValid from "./validation";

import "./style.css";

const FunctionComponent = () => {
  const [price, setPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const tax = 1.25;
  const selectOptions = [5, 10, 15, 20];
  const selectDefaultOption = selectOptions[1];
  const [tip, setTip] = useState(selectDefaultOption);
  const optionElements = selectOptions.map((option) => (
    <option key={option} value={option}>
      {option}%
    </option>
  ));

  const handlePriceInputChange = (e) => setPrice(e.target.value);

  const handleTipChange = (e) => setTip(e.target.value);

  const handleClick = () => {
    isValid(price) && setFinalPrice(parseInt(price) * tax + parseInt(tip));
  };

  const handleGoBackClick = () => {
    setTip(selectDefaultOption);
    setPrice("");
    setFinalPrice("");
  };

  return (
    <>
      {!finalPrice && (
        <Form
          options={optionElements}
          price={price}
          handlePrice={handlePriceInputChange}
          tip={tip}
          handleTipChange={handleTipChange}
          handleClick={handleClick}
        />
      )}

      {finalPrice && (
        <>
          <p>{`final price: ${finalPrice}`}</p>
          <button onClick={handleGoBackClick} className="formButton">
            back
          </button>
        </>
      )}
    </>
  );
};

export default FunctionComponent;
