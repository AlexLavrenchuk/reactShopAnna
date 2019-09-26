import React from 'react';

import { connect } from 'react-redux';
import Preloader from '../preloader/Preloader';

import { preloaderShow,putProductToState, getError } from '../../store/actionCreator';
import { fetchRequest } from '../fetch/fetch';

const Market = (props) => {
  const { preloader, productInitialState, errorMessage } = props.productToProps;
  return (
    <div>
      <h2>Market</h2>
      <ul>
        {errorMessage ? <p>{errorMessage}</p> : ''}
        {preloader ? <Preloader /> : ''}
        {productInitialState.map(item => <li key={item.id}>
          {item.name}
          <button>add to cart</button>
        </li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productToProps: state.productReducer,
  };
};

const mapDispatchToProps = dispatch => {
  const getProduct = () => {
    return fetchRequest(
      "https://jsonplaceholder.typicode.com/users",
      { metod: "GET" },
      () => preloaderShow(),
      response => {
        return response.error ? getError("Error message") : putProductToState(response);
      }
    );
  };
  return {
    dataProduct: dispatch(getProduct())
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);