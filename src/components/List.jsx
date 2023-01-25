import React from 'react'
import {FaEdit, FaTrash} from "react-icons/fa" // react-icons kütüphanesinden import ediyoruz.

// prosp ile gelen veri ve fonksiyonları yakalıyorum.
const List = ({ list, removeItem, editItem }) => {
  return (
    <div className="list">
          {list.map((item) => {
        const { id, title } = item;
        return (
          <div className="list-item" key={id}>
            <p>
           
              <small>-</small> {title}
            </p>
            <div className="btn">
              <button className="edit-btn">
                <FaEdit onClick={() => editItem(id)} />{" "}
              </button>
              <button className="del-btn">
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List