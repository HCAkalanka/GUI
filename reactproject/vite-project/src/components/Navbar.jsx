import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { cartItems } = useContext(CartContext); // Use CartContext

  return (
    <nav>
      <div className="title">WTechHaven</div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
        <NavLink to="/login">Login</NavLink>

        </li>
        
        <li>
          <NavLink to="/cart" className="cart-link">
            <span role="img" aria-label="cart">🛒</span> Cart ({cartItems?.length || 0})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;