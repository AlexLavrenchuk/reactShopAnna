import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import styleMarket from "./_market.module.scss";
import Preloader from "../preloader/Preloader";
import { fetchRequest } from "../fetch/fetch";

import {
  marketRequest,
  marketRequestSuccess,
  marketRequestError,
  putItemToCart,
} from "../../store/actionCreator";

const Market = props => {
  const { addItemToCart } = props;
  const { preloader, marketItems, errorMessage, cartItem } = props.marketToProps;

  const addToCart = (e) => {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
      const id = e.target.parentElement.dataset.id
      let [res] = marketItems.filter(item => item.id === +id);
      addItemToCart(res);
    }
  }

  return (
    <div className={styleMarket.container}>
      <h2 className={styleMarket.title}>Market</h2>
      <ul className={styleMarket.list} onClick={addToCart}>
        {errorMessage ? <p>{errorMessage}</p> : ""}
        {preloader ? <Preloader /> : ""}
        {marketItems.map(item => (
          <li
            key={item.id}
            data-id={item.id}
            className={styleMarket.item}
          >
            <span className={styleMarket.name}>{item.name}</span>
            {
              cartItem.some(d => d.id === item.id)
              ?
              <Link className={styleMarket.link} to='/cart'>Go to cart</Link>
              :
              <button className={styleMarket.btn}>Add to cart</button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    marketToProps: state.marketReducer
  };
};

const mapDispatchToProps = dispatch => {
  const getMarketItems = () => {

    return fetchRequest(
      "https://jsonplaceholder.typicode.com/users",
      { metod: "GET" },
      () => marketRequest(),
      response => {
        return response.error
          ? marketRequestError("Error message")
          : marketRequestSuccess(response);
      }
    );
  };

  return {
    dataMarket: dispatch(getMarketItems()),
    addItemToCart: (elem) => dispatch(putItemToCart(elem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
