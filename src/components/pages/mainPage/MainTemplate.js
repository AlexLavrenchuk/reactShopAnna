import React from "react";
import { Route } from 'react-router-dom';

import Header from '../../common/header/Header';
import Cart from '../../common/cart/Cart';
import Market from '../../common/market/Market';

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto'
  }
}

const MainTemplate = () => {
  return (
    <div style={styles.wrapper}>
      <Header />
      <main>
        <Route path='/cart' component={Cart} />
        <Route path='/market' component={Market} />
      </main>
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
};

export default MainTemplate;
