import React from 'react';
import ReactDOM  from 'react-dom/client';


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
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
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
    <div>
      <h1>Fast React Pizza Co.</h1>
    </div>
  )
};

function Menu() { 
  return (
    <div>
      <h2>Our Menus</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};
function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 24;
  if ( currentHour >= openHour && currentHour <= closeHour) alert("Open");
  else alert("Sorry, We are Closed now!");
  
  return (
    <>
      <footer>{new Date().toLocaleTimeString()}  We Are Currently Open</footer>
    </>
  );
}
function Pizza() {
  return (
    <>
      <img src="/pizzas/focaccia.jpg" alt="Focaccia Pizza" />
      <p>ingredients : Bread with italian olive oil and rosemary </p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

