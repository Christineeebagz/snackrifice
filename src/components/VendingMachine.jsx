import React from "react";
import "./style.css";
import "./global.css";

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

  const subOrder = (name) => {
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

                user-select: none;
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
                user-select: none;
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

  // const buttonStyle = { margin: '5px' }; "I comment out some cause it can be seen on the bg"

  return (
    <div>
      <div className="navigation-bar">
        <div className="snackrifice-text">Snackrifice</div>
      </div>
      <img className="spotlight1" src="img/spotlight-1.svg" />
      <img className="spotlight2" src="img/spotlight-2.svg" />
      <div className="vending-machine">
        <div className="overlap-group-wrapper">
          <div className="title-section">
            <img className="title" src="img/title-image.png" />
          </div>
          <div className="main-vending">
            <div className="main-shadow"></div>
            <div className="vending-shadow"></div>
            <div className="handle"></div>
            <div className="handle-2"></div>
            <img className="toe" src="img/toe-kick2.svg" />
            <img className="toe-kick" src="img/toe-kick1.svg" />
            <div className="yellow-vending"></div>
            <div className="inside-black"></div>
            <div className="inside"></div>
            <div className="inside-red"></div>
            <div className="box red2"></div>
            <div className="inside_black3"></div>
            <div className="inside_shadow3"></div>
            <img className="pick-up" src="img/pick-up.png" />
            <div className="design-side">
              <div className="overlap-24">
                <div className="light-side"></div>
                <div className="red-side"></div>
              </div>
            </div>
            <div className="choose-section">
              <img className="screen-section" src="img/screen-section.svg" />
              <button className="start-button" onClick={startMachine}>
                <div className="button-white">
                  <div className="button-yellow"></div>
                  <div className="start-shadow">start</div>
                  <div className="start-text">start</div>
                </div>
              </button>
              <button className="cancel-button" onClick={clearOrder} disabled={!started}>
                <div className="button-white">
                  <div className="button-yellow"></div>
                  <div className="cancel-shadow">cancel</div>
                  <div className="cancel-text">cancel</div>
                </div>
              </button>
              <button className="finish-button" onClick={doneOrder} disabled={!started || order.length === 0 || order.some(item => item.quantity === 0)}>
                <div className="button-white">
                  <div className="button-yellow"></div>
                  <div className="finish-shadow">finish</div>
                  <div className="finish-text">finish</div>
                </div>
              </button>
            </div>
            <div className="food-section">
              <div className="inside_black2"></div>
              <div className="inside_shadow2"></div>
              <div className="redbox"></div>
              <div className="division"></div>
              <div className="division-2"></div>
              <div className="division-3"></div>
              <img className="ellipse1" src="img/light-vending.png" />
              <img className="ellipse2" src="img/light-vending.png" />
              <img className="ellipse3" src="img/light-vending.png" />
              <div className="stand stand-1"></div>
              <div className="stand stand-2"></div>
              <div className="stand stand-3"></div>
              <div className="stand stand-4"></div>
              <div className="stand stand-5"></div>
              <div className="stand stand-6"></div>
              <div className="stand stand-7"></div>
              <div className="stand stand-8"></div>
              <div className="stand stand-9"></div>
              <div className="stand stand-10"></div>
              <div className="stand stand-11"></div>
              <div className="stand stand-12"></div>
              <div className="stand stand-13"></div>
              <div className="stand stand-14"></div>
              <div className="stand stand-15"></div>
              <div className="stand stand-16"></div>
              <div className="stand stand-17"></div>
              <div className="stand stand-18"></div>
              <div className="snacks-section">
                <div className="category-text-shadow">Snacks</div>
                <div className="category-text">Snacks</div>
                <div className="overlap-6">
                  <div className="empanada-section">
                    <div className="overlap-middle">
                      <img className="shadow-food" src="img/shadow-foodep.svg" />
                      <img className="empanada" src="img/empanada-2.png" />
                      <img className="empanada-2" src="img/empanada-2.png" />
                      <img className="empanada-3" src="img/empanada-2.png" />
                      <button className="button-green" onClick={() => addOrder("Empanada")} disabled={!started}></button>
                      <div className="food-text">Empanada</div>
                    </div>
                  </div>
                  <div className="quick2-section">
                    <div className="overlap-last">
                      <img className="shadow-food" src="img/shadow-foodqk.svg" />
                      <img className="quick" src="img/quick-2x.png" />
                      <img className="quick-x" src="img/quick2x-1.png" />
                      <img className="quick-2" src="img/quick2x-2.png" />
                      <button className="button-green" onClick={() => addOrder("Quick2x")} disabled={!started}></button>
                      <div className="food-text">Quick2x</div>
                    </div>
                  </div>
                  <div className="sandwich-section">
                    <div className="overlap-first">
                      <img className="shadow-food" src="img/shadow-foodsw.svg" />
                      <img className="sandwich" src="img/sandwich-2.png" />
                      <img className="sandwich-2" src="img/sandwich-2.png" />
                      <img className="sandwich-3" src="img/sandwich-2.png" />
                      <button className="button-green" onClick={() => addOrder("Sandwich")} disabled={!started}></button>
                      <div className="food-text">Sandwich</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rice-meals-section">
                <div className="overlap-16">
                  <div className="category-text-shadow">Rice Meals</div>
                  <div className="category-text">Rice Meals</div>
                  <div className="pastil-section">
                    <div className="overlap-first">
                      <img className="shadow-food" src="img/shadow-foodpt.svg" />
                      <img className="pastil" src="img/pastil-image2.png" />
                      <img className="pastil-image" src="img/pastil-image2.png" />
                      <img className="pastil-2" src="img/pastil-image2.png" />
                      <button className="button-green" onClick={() => addOrder("Pastil")} disabled={!started}></button>
                      <div className="food-text">Pastil</div>
                    </div>
                  </div>
                  <div className="sisig-section">
                    <div className="overlap-middle">
                      <img className="shadow-food" src="img/shadow-foodss.svg" />
                      <img className="sisig-silog" src="img/sisig-silog-2.png" />
                      <img className="sisig-silog-2" src="img/sisig-silog-3.png" />
                      <img className="sisig-silog-3" src="img/sisig-silog-4.png" />
                      <button className="button-green" onClick={() => addOrder("Sisilog")} disabled={!started}></button>
                      <div className="food-text">Sisilog</div>
                    </div>
                  </div>
                  <div className="sinuglaw-section">
                    <div className="overlap-last">
                      <img className="shadow-food" src="img/shadow-foodsin.svg" />
                      <img className="sinuglaw" src="img/sinuglaw-image1.png" />
                      <img className="sinuglaw-image" src="img/sinuglaw-image1.png" />
                      <img className="sinuglaw-2" src="img/sinuglaw-image1.png" />
                      <button className="button-green" onClick={() => addOrder("Sinuglaw")} disabled={!started}></button>
                      <div className="food-text">Sinuglaw</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="drinks-section">
                <div className="overlap-20">
                  <div className="category-text-shadow">Drinks</div>
                  <div className="category-text">Drinks</div>
                  <div className="cobra-section">
                    <div className="overlap-last">
                      <img className="shadow-food" src="img/shadow-foodcb.svg" />
                      <button className="button-green" onClick={() => addOrder("Cobra")} disabled={!started}></button>
                      <div className="food-text">Cobra</div>
                      <img className="cobra" src="img/cobra-2.png" />
                      <img className="cobra-2" src="img/cobra-2.png" />
                      <img className="cobra-3" src="img/cobra-3.png" />
                    </div>
                  </div>
                  <div className="donmac-section">
                    <div className="overlap-middle">
                      <img className="shadow-food" src="img/shadow-fooddm.svg" />
                      <img className="don-mac" src="img/don-mac-image3.png"/>
                      <img className="don-mac-image" src="img/don-mac-image1.png" />
                      <img className="don-mac-2" src="img/don-mac-image1.png" />
                      <button className="button-green" onClick={() => addOrder("DonMac")} disabled={!started}></button>
                      <div className="food-text">DonMac</div>
                    </div>
                  </div>
                  <div className="tastickles-section">
                    <div className="overlap-first">
                      <img className="shadow-food" src="img/shadow-foodts.svg" />
                      <img className="tastickles" src="img/tastickles-1.png" />
                      <img className="tastickles-2" src="img/tastickles-1.png" />
                      <img className="tastickles-3" src="img/tastickles-1.png" />
                      <button className="button-green" onClick={() => addOrder("Tastickles")} disabled={!started}></button>
                      <div className="food-text">Tastickles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="flowers-2" src="img/flowers-3.png" />
            <img className="flowers-3" src="img/flowers-1.png" />
            <img className="flowers-4" src="img/flowers-2.png" />
          </div>
        </div>
      </div>
      <div className="order-section">
        {/* <h2>Orders:</h2> */}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {order.map((item, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              {/* {item.name} - Quantity:  */}
              <button onClick={() => subOrder(item.name)} disabled={!started} style={{ margin: '0 5px' }}>
                {/* - */}
              </button> 
              {item.quantity} 
              <button onClick={() => addOrder(item.name)} disabled={!started} style={{ margin: '0 5px' }}>
                {/* + */}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button onClick={clearOrder} disabled={!started} style={{ margin: '0 10px' }}>
            {/* Cancel */}
          </button>
          <button onClick={doneOrder} disabled={!started || order.length === 0 || order.some(item => item.quantity === 0)} style={{ margin: '0 10px' }}>
            {/* Place Order */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;