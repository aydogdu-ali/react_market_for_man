import React, { useEffect } from 'react'


const Alert = ({ type, message, removeAlert }) => {

  // verilen uyarının 3 saniye sonra kaybolması için
  // useEffect kullandım.
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <p className={`alert alert-${type}`}>{message}</p>
    </div>
  );
};

export default Alert;