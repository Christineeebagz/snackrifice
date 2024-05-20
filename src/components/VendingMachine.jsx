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

  const decrementOrder = (name) => {
    const existingItem = order.find((item) => item.name === name);

    if (existingItem) {
      const updatedOrder = order
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      setOrder(updatedOrder);
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

  const buttonStyle = { margin: '5px' };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <button onClick={startMachine} style={{ marginBottom: '10px' }}>Start</button>
        <div id="snacks" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <button onClick={() => addOrder("Pastil")} disabled={!started} style={buttonStyle}>
            Pastil
          </button>
          <button onClick={() => addOrder("Sandwich")} disabled={!started} style={buttonStyle}>
            Sandwich
          </button>
          <button onClick={() => addOrder("Empanada")} disabled={!started} style={buttonStyle}>
            Empanada
          </button>
        </div>
        <div id="meal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <button onClick={() => addOrder("Kawayan")} disabled={!started} style={buttonStyle}>
            Kawayanan
          </button>
          <button onClick={() => addOrder("Silog")} disabled={!started} style={buttonStyle}>
            Silog
          </button>
          <button onClick={() => addOrder("Pastil")} disabled={!started} style={buttonStyle}>
            Pastil
          </button>
        </div>
        <div id="drinks" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <button onClick={() => addOrder("DonMac")} disabled={!started} style={buttonStyle}>
            DonMac
          </button>
          <button onClick={() => addOrder("TasteTickles")} disabled={!started} style={buttonStyle}>
            TasteTickles
          </button>
          <button onClick={() => addOrder("Gulp")} disabled={!started} style={buttonStyle}>
            Gulp
          </button>
        </div>
        <div id="orderbar">
          <h2>Orders:</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {order.map((item, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                {item.name} - Quantity: 
                <button onClick={() => decrementOrder(item.name)} disabled={!started} style={buttonStyle}>
                  -
                </button> 
                {item.quantity} 
                <button onClick={() => addOrder(item.name)} disabled={!started} style={buttonStyle}>
                  +
                </button>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button onClick={clearOrder} disabled={!started} style={buttonStyle}>
              Cancel
            </button>
            <button onClick={doneOrder} disabled={!started} style={buttonStyle}>
              Place Order
            </button>
            {orderDone ? <button onClick={clearOrder} style={buttonStyle}>New Order</button> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;
