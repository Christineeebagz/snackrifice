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
    setStarted(false);
    setOrderDone(false);
  };

  const startMachine = () => {
    setStarted(true);
  };

  const doneOrder = () => {
    if (order.every(item => item.quantity > 0)) {
      setOrderDone(true);
      console.log(order);
      
      const newTab = window.open("", "_blank");
      newTab.document.write(`
        <html>
          <head>
            <title>Order Confirmation</title>
            <style>
              :root {
                font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
                line-height: 1.5;
                font-weight: 400;
              
                color-scheme: light dark;
                color: rgba(255, 255, 255, 0.87);
                background-color: #242424;
              
                font-synthesis: none;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              
              a {
                font-weight: 500;
                color: #646cff;
                text-decoration: inherit;
              }
              a:hover {
                color: #535bf2;
              }
              
              body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 320px;
                min-height: 100vh;
              }
              
              h1 {
                font-size: 3.2em;
                line-height: 1.1;
                margin: 20px;
              }
              
              button {
                border-radius: 8px;
                border: 1px solid transparent;
                padding: 0.6em 1.2em;
                font-size: 1em;
                font-weight: 500;
                font-family: inherit;
                background-color: #1a1a1a;
                cursor: pointer;
                caret-color: transparent;
                transition: border-color 0.25s;
              }
              button:hover {
                border-color: #646cff;
              }
              button:focus,
              button:focus-visible {
                outline: 4px auto -webkit-focus-ring-color;
              }
              
              @media (prefers-color-scheme: light) {
                :root {
                  color: #213547;
                  background-color: #ffffff;
                }
                a:hover {
                  color: #747bff;
                }
                button {
                  background-color: #f9f9f9;
                }
              }            

              .order-message {
                margin-bottom: 20px;
              }
              .new-order-button {
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <h1 class="order-message">Order Placed Successfully!</h1>
            <button class="new-order-button" onclick="window.close()" style={{ margin: '5px' }}>New Order</button>
          </body>
        </html>
      `);
    }
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
            <button onClick={doneOrder} disabled={!started || order.length === 0 || order.some(item => item.quantity === 0)} style={buttonStyle}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;
