import React from 'react';

const InputSelectWithTitle = ({
  title,
  value,
  data,
  onChange,
  disabled,
  errors,
  ...rest
}) => {
  // console.log('isi data driver item', data);
  return (
    <div className='form-group'>
      <label htmlFor={rest.id}>{title}</label>
      <select
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        disabled={disabled}
      >
        {data &&
          data.map((item, ind) => {
            return (
              <option key={ind} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
      {errors[rest.id] && <div className='text_error'>{errors[rest.id]}</div>}
    </div>
  );
};

export default InputSelectWithTitle;
