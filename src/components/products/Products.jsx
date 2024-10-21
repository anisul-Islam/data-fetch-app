//@ts-nocheck
import React from 'react';
import Product from './Product';

const Products = ({ products }) => {

  if (products.length === 0) {
    return <h2>No products data available</h2>;
  }
  
  return (
    <>
      <h2>List of Products</h2>
      <section className="products">
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </section>
    </>
  );
};

export default Products;
