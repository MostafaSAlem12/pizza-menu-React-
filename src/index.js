import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaNum = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menus</h2>

      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven,all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working un our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Focaccia"
        photoName="/pizzas/focaccia.jpg"
        ingredients="Bread with italian olive oil and rosemary"
        price="6"
      />

      <Pizza
        name="Pizza Margherita"
        photoName="/pizzas/margherita.jpg"
        ingredients="Tomato and mozarella"
        price="10"
      /> */}
    </main>
  );
}
function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 4;
  const closeHour = 8;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(isOpen);
  // if ( currentHour >= openHour && currentHour <= closeHour) alert("Open");
  // else alert("Sorry, We are Closed now!");

  if (!isOpen)
    return (
      <p className="footer">
        We're happy to welcome you between {openHour}:00 AM. and {closeHour}:00
        PM.
      </p>
    );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 AM. and {closeHour}
          :00 PM.
        </p>
      )}
    </footer>
  );
}

function Order({closeHour}) {
  return (
    <div className="order">
      <p>
        We're open now until {closeHour}:00. come visit us or order online
      </p>
      <button className="btn">order</button>
    </div>
  );
}

function Pizza({pizzaObj}) {
  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}` }>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : "price: " + (Number(pizzaObj.price) + 3)}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
