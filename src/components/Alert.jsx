import React, { useEffect } from 'react'

// props olarak gönderdiğim objeleri yakaladım.
const Alert = ({ type, message, removeAlert, list }) => {

  // verilen uyarının 3 saniye sonra kaybolması için
  // useEffect kullandım.
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]); // list yani listemizi bağımlılık olarak tanımlıyoruz ki kullanıcı her bir işlemde 3 saniye beklemesin
  // list her değiştiğinde yeni duruma göre mesajını hemen değiştirsin
  return (
    <div className='ikaz'>
      <p className={`alert alert-${type}`}>{message}</p>
    </div>
  );
};

export default Alert;