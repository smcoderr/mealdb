import { Outlet, Link, NavLink } from "react-router-dom";
import React from "react";
import heroImg from "../../assets/1.jpg";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
      <div className="hero">
        <img src={heroImg} alt="image" loading="lazy" />
        <div className="hero-content">
          <h1>It's Not Just Food, It's An Experience.</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="yellow">Book now</button>
          <button>Know more</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
