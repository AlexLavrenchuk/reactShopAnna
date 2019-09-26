import React from "react";
import { Link } from 'react-router-dom';

import styleNav from "./_navigation.module.scss";


const Navigation = () => {
  return (
    <nav className={styleNav.nav}>
      <Link to="/"
        className={styleNav.link}
      >Home</Link>

      <Link to="/about"
        className={`${styleNav.link} ${styleNav.disabled}`}
        onClick={e => e.preventDefault()}
      >About us</Link>

      <Link to="/products"
        className={`${styleNav.link} ${styleNav.disabled}`}
        onClick={e => e.preventDefault()}
      >Products</Link>
    </nav>
  );
};

export default Navigation;
