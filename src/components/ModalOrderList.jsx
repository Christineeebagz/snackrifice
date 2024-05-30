import React from "react";
import "./modalorderlist.css";

const ModalOrderList = ({ orders }) => {
  return (
    <div className="item-list">
      {orders.map((order, index) => (
        <div key={index} className="order-list">
          <img src={order.image} alt={order.name} />
          <div className="item-info">
            <span className="item-name">{order.name}</span>
            <span>{order.quantity}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModalOrderList;
