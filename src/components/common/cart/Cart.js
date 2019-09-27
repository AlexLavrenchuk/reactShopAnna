import React from 'react';
import { connect } from 'react-redux';

import styleCart from './_cart.module.scss';

import { deleteItemFromCart } from '../../store/actionCreator';

const Cart = (props) => {
  const {deleteItemToCart} = props
  const { cartItem } = props.cartToProps;
  console.log(props);

  const deleteCart = (e) => {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
      const id = e.target.parentElement.dataset.id
      let res = cartItem.filter(item => item.id !== +id);
      deleteItemToCart(res);
    }
  }
  return (
    <div className={styleCart.wrapper}>
      <h2 className={styleCart.title}>Cart</h2>
      <ul className={styleCart.list} onClick={deleteCart}>
        {
          cartItem.length
          ?
            cartItem.map(item => {
              return (
                <li
                  key={item.id}
                  data-id={item.id}
                  className={styleCart.item}
                >
                  <div>
                    <h4 className={styleCart.name}>{item.name}</h4>
                    <p className={styleCart.description}>{item.website}</p>
                  </div>
                  <button className={styleCart.btn}>&times;</button>
                </li>
              )
          })
          : 
          <li>
            <span>Nothing added to cart</span>
          </li>
        }
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    cartToProps: state.marketReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItemToCart: (elem) => dispatch(deleteItemFromCart(elem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);