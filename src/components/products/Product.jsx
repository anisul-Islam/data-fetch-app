import React from 'react';

const Product = ({ product }) => {
  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button>Delete</button>
      <button>Update</button>
    </div>
  );
};

export default Product;
