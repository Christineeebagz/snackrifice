import React from "react";

const VendingMachine = () => {
  const [order, setOrder] = React.useState([]);
  const [started, setStarted] = React.useState(false);
  const [orderDone, setOrderDone] = React.useState(false);

  const addOrder = (name) => {
    const existingItem = order.find((item) => item.name === name);

    if (existingItem) {
      const updatedOrder = order.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setOrder(updatedOrder);
    } else {
      setOrder([...order, { name: name, quantity: 1 }]);
    }
  };

  const clearOrder = () => {
    setOrder([]);
  };

  const startMachine = () => {
    setStarted(true);
  };

  const doneOrder = () => {
    setOrderDone(true);
    console.log(order);
  };

  return (
    <div>
      <button onClick={startMachine}>Start</button>
      <div id="snacks">
        <button onClick={() => addOrder("Pastil")} disabled={!started}>
          Pastil
        </button>
        <button onClick={() => addOrder("Sandwich")} disabled={!started}>
          Sandwich
        </button>
        <button onClick={() => addOrder("Empanada")} disabled={!started}>
          Empanada
        </button>
      </div>
      <div id="meal">
        <button onClick={() => addOrder("Kawayan")} disabled={!started}>
          Kawayanan
        </button>
        <button onClick={() => addOrder("Silog")} disabled={!started}>
          Silog
        </button>
        <button onClick={() => addOrder("Pastil")} disabled={!started}>
          Pastil
        </button>
      </div>

      <div id="drinks">
        <button onClick={() => addOrder("DonMac")} disabled={!started}>
          DonMac
        </button>
        <button onClick={() => addOrder("TasteTickles")} disabled={!started}>
          TasteTickles
        </button>
        <button onClick={() => addOrder("Gulp")} disabled={!started}>
          Gulp
        </button>
      </div>

      <div id="orderbar">
        <h2>Orders:</h2>
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={clearOrder} disabled={!started}>
          Cancel
        </button>
        <button onClick={doneOrder} disabled={!started}>
          Place Order
        </button>
        {orderDone ? <button onClick={clearOrder}>New Order</button> : null}
      </div>
    </div>
  );
};

export default VendingMachine;
