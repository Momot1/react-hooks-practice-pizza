import React from "react";

function Pizza({ pizza, onPizzaClick }) {
  const {topping, size, vegetarian} = pizza
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={e => onPizzaClick(pizza)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
