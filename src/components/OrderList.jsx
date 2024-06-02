// OrderList.jsx
import React from "react";
import "./orderlist.css";

const OrderList = ({ orders, setCurrent }) => {
  const handleClick = (itemName) => {
    setCurrent(itemName);
  };

  return (
    <div className="pick-up">
      <div id="pick-up-container">
        {orders.map((order, index) => (
          <div
            key={index}
            className="order-item"
            onClick={() => handleClick(order.name)}
          >
            <img src={order.image} alt={order.name} />
            <span id="quantity-text">{order.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
