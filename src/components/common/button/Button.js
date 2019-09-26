import React from 'react';

import styleButton from './_button.module.scss';

const Button = (props) => {
  const {
    title,
    type,
    disabled
  } = props;
  return (
    <button
      className={`${styleButton.basic}`}
      disabled={disabled}
      type={type}
    >
      {title}</button>
  )
}

export default Button;