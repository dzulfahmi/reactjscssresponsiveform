import React from 'react';

const Alert = ({ type, message }) => {
  // Determine the class based on the alert type
  const alertClass = `alert ${type}`;

  return (
    <div className={alertClass}>
      {message}
    </div>
  );
};

export default Alert;