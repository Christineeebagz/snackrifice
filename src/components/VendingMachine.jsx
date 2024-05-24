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

  const buttonStyle = { margin: '5px' };

  return (
    <div>
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
    <div class="navigation-bar">
      <div class="snackrifice-text">Snackrifice</div>
    </div>
    <img class="spotlight1" src="public/img/spotlight-1.svg" />
    <img class="spotlight2" src="public/img/spotlight-2.svg" />
    <div class="vending-machine">
      <div class="overlap-group-wrapper">
        <div class="title-section">
          <img class="title" src="public/img/title-image.png" />
        </div>
        <div class="main-vending">
        <div class="main-shadow"></div>
        <div class="vending-shadow"></div>
        <div class="handle"></div>
        <div class="handle-2"></div>
        <img class="toe" src="public/img/toe-kick2.svg" />
        <img class="toe-kick" src="public/img/toe-kick1.svg" />
        <div class="yellow-vending"></div>
        <div class="inside-black"></div>
        <div class="inside"></div>
        <div class="inside-red"></div>
        <div class="box red2"></div>
        <div class="choose-section">
          <img class="screen-section" src="public/img/screen-section.svg" />
          <button class="start-button">
            <div class="button-white">
              <div class="button-yellow"></div>
              <div class="start-shadow">start</div>
              <div class="start-text">start</div>
            </div>
          </button>
          <button class="cancel-button">
            <div class="button-white">
              <div class="button-yellow"></div>
              <div class="cancel-shadow">cancel</div>
              <div class="cancel-text">cancel</div>
            </div>
          </button>
          <button class="finish-button">
            <div class="button-white">
              <div class="button-yellow"></div>
              <div class="finish-shadow">finish</div>
              <div class="finish-text">finish</div>
            </div>
          </button>
        </div>
        <div class="food-section">
            <div class="inside_black2"></div>
            <div class="inside_shadow2"></div>
            <div class="redbox"></div>
            <div class="division"></div>
            <div class="division-2"></div>
            <div class="division-3"></div>
            <img class="ellipse1" src="public/img/light-vending.png" />
            <img class="ellipse2" src="public/img/light-vending.png" />
            <img class="ellipse2" src="public/img/light-vending.png" />
            <div class="snacks-section">
              <div class="overlap-6">
                  <div class="stand stand-1"></div>
                <div class="overlap-8">
                  <div class="stand stand-2"></div>
                  <div class="category-text-shadow">Snacks</div>
                  <div class="category-text">Snacks</div>
                  <div class="empanada-section">
                    <div class="overlap-empanada">
                      <img class="shadow-foodep" src="public/img/shadow-foodep.svg" />
                      <img class="empanada" src="public/img/empanada-2.png" />
                      <img class="empanada-2" src="public/img/empanada-2.png" />
                      <img class="empanada-3" src="public/img/empanada-2.png" />
                      <button class="button-green buttongreen1"></button>
                      <div class="empanada-text">Empanada</div>
                    </div>
                  <div class="quick2-section">
                    <div class="overlap-quick2">
                      <img class="shadow-foodqk" src="public/img/shadow-foodqk.svg" />
                      <img class="quick" src="public/img/quick-2x.png" />
                      <img class="quick-x" src="public/img/quick2x-1.png" />
                      <img class="quick-2" src="public/img/quick2x-2.png" />
                      <button class="button-green buttongreen2"></button>
                      <div class="text-wrapper-5">Quick 2x</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overlap-11">
                <div class="stand stand-3"></div>
              </div>
              <div class="overlap-12">
                <div class="stand stand-4"></div>
              </div>
              <div class="stand stand-5"></div>
              <div class="overlap-13">
                <div class="overlap-14">
                  <div class="stand stand-6"></div>
                  <div class="overlap-15">
                    <div class="sandwich-section">
                      <div class="overlap-group-3">
                        <img class="shadow-foodsw" src="public/img/shadow-foodsw.svg" />
                        <img class="sandwich" src="public/img/sandwich-2.png" />
                        <img class="sandwich-2" src="public/img/sandwich-2.png" />
                        <img class="sandwich-3" src="public/img/sandwich-2.png" />
                        <button class="button-green buttongreen3"></button>
                        <div class="sandwich-text">Sandwich</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rice-meals-section">
              <div class="overlap-16">
                <div class="overlap-17">
                  <div class="stand stand-8"></div>
                  <div class="category-text-shadow">Rice Meals</div>
                  <div class="categorytext">Rice Meals</div>
                  <div class="pastil-section">
                    <div class="overlap-group-4">
                      <img class="shadow-foodpt" src="public/img/shadow-foodpt.svg" />
                      <img class="pastil" src="public/img/pastil-image2.png" />
                      <img class="pastil-image" src="public/img/pastil-image2.png" />
                      <img class="pastil-2" src="public/img/pastil-image2.png" />
                      <button class="button-green buttongreen4"></button>
                      <div class="pastil-text">Pastil</div>
                    </div>
                  </div>
                  <div class="sisig-section">
                    <div class="overlap-18">
                      <img class="shadow-foodss" src="public/img/shadow-foodss.svg" />
                      <img class="sisig-silog" src="public/img/sisig-silog-2.png" />
                      <img class="sisig-silog-2" src="public/img/sisig-silog-3.png" />
                      <img class="sisig-silog-3" src="public/img/sisig-silog-4.png" />
                      <button class="button-green buttongreen5"></button>
                      <div class="sisilog-text">Sisilog</div>
                    </div>
                  </div>
                  <div class="sinuglaw-section">
                    <div class="overlap-19">
                      <img class="shadow-foodsin" src="public/img/shadow-foodsin.svg" />
                      <img class="sinuglaw" src="public/img/sinuglaw-image1.png" />
                      <img class="sinuglaw-image" src="public/img/sinuglaw-image1.png" />
                      <img class="sinuglaw-2" src="public/img/sinuglaw-image1.png" />
                      <button class="button-green buttongreen6"></button>
                      <div class="text-wrapper-7">Sinuglaw</div>
                    </div>
                  </div>
                </div>
                <div class="stand stand-9"></div>
                <div class="stand stand-10"></div>
                <div class="stand stand-11"></div>
                <div class="stand stand-12"></div>
              </div>
            </div>
            <div class="drinks-section">
              <div class="overlap-20">
                <div class="stand stand-13"></div>
                <div class="overlap-21">
                  <div class="stand stand-14"></div>
                  <div class="stand stand-15"></div>
                  <div class="category-text-shadow">Drinks</div>
                  <div class="category">Drinks</div>
                  <div class="cobra-section">
                    <div class="overlap-group-5">
                      <img class="shadow-foodcb" src="public/img/shadow-foodcb.svg" />
                      <button class="button-green buttongreen7"></button>
                      <div class="text-wrapper-9">Cobra</div>
                      <img class="cobra" src="public/img/cobra-2.png" />
                      <img class="cobra-2" src="public/img/cobra-2.png" />
                      <img class="cobra-3" src="public/img/cobra-3.png" />
                    </div>
                  </div>
                  <div class="donmac-section">
                    <div class="overlap-22">
                      <img class="shadow-fooddm" src="public/img/shadow-fooddm.svg" />
                      <img class="don-mac" src="public/img/don-mac-image3.png" />
                      <img class="don-mac-image" src="public/img/don-mac-image1.png" />
                      <img class="don-mac-2" src="public/img/don-mac-image1.png" />
                      <button class="button-green buttongreen8"></button>
                      <div class="text-wrapper-10">DonMac</div>
                    </div>
                  </div>
                  <div class="tastickles-section">
                    <div class="overlap-23">
                      <img class="shadow-foodts" src="public/img/shadow-foodts.svg" />
                      <img class="tastickles" src="public/img/tastickles-1.png" />
                      <img class="tastickles-2" src="public/img/tastickles-1.png" />
                      <img class="tastickles-3" src="public/img/tastickles-1.png" />
                      <button class="button-green buttongreen9"></button>
                      <div class="tastickles-text">Tastickles</div>
                    </div>
                  </div>
                </div>
                <div class="stand stand-16"></div>
                <div class="stand stand-17"></div>
                <div class="stand stand-18"></div>
              </div>
            </div>
            <img class="glass-shadow-vm" src="public/img/glass-shadow-vm.svg" />
          </div>
        </div>
        <div class="inside_black3"></div>
        <div class="inside_shadow3"></div>
        <img class="pick-up" src="public/img/pick-up.png" />              
        <div class="design-side">
          <div class="overlap-24">
            <div class="light-side"></div>
            <div class="red-side"></div>
          </div>
        </div>
        <div class="flowers">
          <div class="overlap-25">
            <img class="flowers-2" src="public/img/flowers-3.png" />
            <img class="flowers-3" src="public/img/flowers-1.png" />
            <img class="flowers-4" src="public/img/flowers-2.png" />
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="background"></div>
    </div>
  );
};

export default VendingMachine;
