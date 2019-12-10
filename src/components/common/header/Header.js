import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styleHeader from './_header.module.scss';

import Navigation from '../navigation/Navigation';

const Header = (props) => {
  const { cartItem: counterCartItem } = props.counterCartItem;

  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.logo}>
        <Link to='/'>
          <img src="https://www.itcraft.com.ua/wp-content/themes/itc/images/logo.png" alt='logo'></img>
        </Link>  
      </div>
      <div className={styleHeader.right_section}>
        <Navigation />
        <Link to='/cart' className={styleHeader.cart_btn}>
          Cart
          {
            counterCartItem.length           
            ?
            <span className={styleHeader.notifications}>{counterCartItem.length}</span>
            :
            null
          }
        </Link>
        <Link to='/login' className={styleHeader.logout_btn} onClick={()=>{localStorage.removeItem("token")}}>Logout</Link>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    counterCartItem: state.marketReducer
  };
};

export default connect(mapStateToProps)(Header);