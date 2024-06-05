import React from "react";
import "./quantitybar.css";

const QuantityBar = ({ orders, current, adjustQuantity, removeItem }) => {
  const currentItem = orders.find((item) => item.name === current);

  const handleIncrease = () => {
    if (currentItem) {
      adjustQuantity(currentItem.name, currentItem.quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (currentItem && currentItem.quantity > 1) {
      adjustQuantity(currentItem.name, currentItem.quantity - 1);
    } else {
      removeItem(currentItem.name);
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
            <button className="quantity-bar-button" onClick={handleDecrease}>
              -
            </button>
            <span className="quantity">{currentItem.quantity}</span>

            <button className="quantity-bar-button" onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantityBar;