import React from 'react';

import styleInput from './_input.module.scss';

const Input = (props) => {
  const {
    type,
    label,
    name,
    id,
    placeholder,
    field,
    form : { touched, errors }
  } = props;

  return (
    <div className={styleInput.group}>
      
      <input
        className={`${styleInput.input} ${touched[field.name] && errors[field.name] && styleInput.error}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder || ' '}
        {...field}
      />
      {
        label
        ? 
      <label
        className={styleInput.label}
        htmlFor={id}
      >
        {label}
      </label>
        :
        null
      }
      {
        touched[field.name] &&
        errors[field.name] &&
        <div className={styleInput.error_message}>{errors[field.name]}</div>
      }
    </div>
    
  )

}

export default Input;