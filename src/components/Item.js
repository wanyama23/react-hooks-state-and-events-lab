import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const cartClass = inCart ? "in-cart" : "";

  const handleAddingToCart = (e) => {
    e.preventDefault();
    setInCart((inCart) => !inCart);
  };
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddingToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;