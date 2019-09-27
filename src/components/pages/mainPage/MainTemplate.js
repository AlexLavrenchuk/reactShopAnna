import React from "react";
import { Route } from 'react-router-dom';

import Header from '../../common/header/Header';
import Cart from '../../common/cart/Cart';
import Market from '../../common/market/Market';

import styleMainTemplate from './_mainTemplate.module.scss';

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
      <main className={styleMainTemplate.main}>
        <Route path='/cart' component={Cart} />
        <Route path='/market' component={Market} />
      </main>
      <footer className={styleMainTemplate.footer}>
        <div className={styleMainTemplate.footer_content}>
          <h2 className={styleMainTemplate.footer_title}>footer</h2>
        </div>
      </footer>
    </div>
  );
};

export default MainTemplate;
