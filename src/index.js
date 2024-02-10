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
  
];

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
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
  return (
    <main className="menu">
      <h2>Our Menus</h2>
      <ul className="pizzas">
      {pizzaData.map((pizza) =>( <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
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
  const openHour = 10;
  const closeHour = 24;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(isOpen);
  // if ( currentHour >= openHour && currentHour <= closeHour) alert("Open");
  // else alert("Sorry, We are Closed now!");

  return (
    <>
      <footer className="footer">
        {new Date().toLocaleTimeString()} We Are Currently Open
      </footer>
    </>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>Price:{Number(props.pizzaObj.price) + 3}</span>
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
