import React from "react";

import stylePreloader from './_preloader.module.scss';

const Preloader = () => {
  return (
    <div className={stylePreloader.cssload_loader}>
      <div className={`${stylePreloader.cssload_inner} ${stylePreloader.cssload_one}`}></div>
      <div className={`${stylePreloader.cssload_inner} ${stylePreloader.cssload_two}`}></div>
      <div className={`${stylePreloader.cssload_inner} ${stylePreloader.cssload_three}`}></div>
    </div>
  );
};

export default Preloader;
