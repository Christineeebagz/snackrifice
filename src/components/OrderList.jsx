// OrderList.jsx
import React from "react";
import "./orderlist.css";

const OrderList = ({ orders }) => {
  return (
    <div className="pick-up">
      {orders.map((order, index) => (
        <div key={index} className="order-item">
          <img src={order.image} alt={order.name} />
          <span>{order.quantity}</span>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
