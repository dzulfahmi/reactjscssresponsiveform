import React from 'react';

const InputWithTitle = ({
  title,
  placeholder,
  disabled,
  type = 'text',
  errors,
  ...rest
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={rest.id}>{title}</label>
      <input 
        type={type} 
        disabled={disabled}
        placeholder={placeholder}
        ha
        {...rest}
       />
      {errors[rest.id] && <div className='text_error'>{errors[rest.id]}</div>}
    </div>
  );
};

export default InputWithTitle;
