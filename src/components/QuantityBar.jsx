import "./quantitybar.css";
import React from "react";

const QuantityBar = ({ orders, current, adjustQuantity }) => {
  const currentItem = orders.find((item) => item.name === current);

  const handleIncrease = () => {
    if (currentItem) {
      adjustQuantity(currentItem.name, currentItem.quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (currentItem && currentItem.quantity > 0) {
      adjustQuantity(currentItem.name, currentItem.quantity - 1);
    }
  };

  return (
    <div className="quantity-bar">
      {currentItem && (
        <div className="content-containter">
          <div className="name-container">
            <span>{currentItem.name}</span>
          </div>
          <div className="image-container">
            <img src={currentItem.image} />
          </div>
          <div className="button-quantity-container">
            <button className="quantity-bar-button" onClick={handleIncrease}>
              +
            </button>
            <span className="quantity">{currentItem.quantity}</span>

            <button className="quantity-bar-button" onClick={handleDecrease}>
              -
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantityBar;
