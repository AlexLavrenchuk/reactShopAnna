import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../img/logo.png';
import styleHeader from './_header.module.scss';

import Navigation from '../navigation/Navigation';

const Header = (props) => {
  
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.logo}>
        <Link to='/'>
          <img src={logo} alt='logo'></img>
        </Link>  
      </div>
      <div className={styleHeader.right_section}>
        <Navigation />
        <Link to='/cart' className={styleHeader.cart_btn}>
          Cart
          <span className={styleHeader.notifications}>{props.countProductsFromCart}</span>
        </Link>
        <Link to='/login' className={styleHeader.logout_btn} onClick={()=>{localStorage.removeItem("token")}}>Logout</Link>
      </div>
    </header>
  );
}


export default Header;