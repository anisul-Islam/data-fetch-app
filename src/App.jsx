import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Products from './components/products/Products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios('https://fakestoreapi.com/products');
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p> Data is Loading...</p>;
  }
  if (error) {
    return <p> {error}</p>;
  }

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default App;

// 1. Component
// 2. JSX
// 3. Props
// 4. Mapping components, key
// 5. state, useState()
// 6. state lifting
// 7. event: onClick, onChange, onSubmit
// 8. controlled component, form validation
// 9. useEffect()
// 10. useContext()
// 11. React routing
// 12. MUI
