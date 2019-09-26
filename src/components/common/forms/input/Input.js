import React from 'react';

import styleInput from './_input.module.scss';

const Input = (props) => {
  const {
    type,
    label,
    name,
    handlerInputChange
  } = props;
  return (
    <div className={styleInput.group}>
      <input
        className={styleInput.input}
        type={type}
        id={name}
        name={name}
        placeholder=' '
        onInput={handlerInputChange}
      />
      <label
        className={styleInput.label}
        htmlFor={name}
        >
        {label}
      </label>
    </div>
    
  )

}

export default Input;