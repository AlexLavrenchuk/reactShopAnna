import React from "react";
import { NavLink } from 'react-router-dom';

import styleNav from "./_navigation.module.scss";




const Navigation = () => {
  return (
    <nav className={styleNav.nav}>
      <NavLink
        exact to="/"
        className={styleNav.link}
        activeClassName={styleNav.active}
      >
        Home
      </NavLink>

      <NavLink
        to="/market"
        className={`${styleNav.link}`}
        activeClassName={styleNav.active}
      >
        Market
      </NavLink>

      <NavLink
        to="/about"
        className={`${styleNav.link} ${styleNav.disabled}`}
        activeClassName={styleNav.active}
        onClick={e => e.preventDefault()}
      >
        About us
      </NavLink>
    </nav>
  );
};

export default Navigation;
