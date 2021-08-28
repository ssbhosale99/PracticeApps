

import { useState } from 'react';
import AddProduct from './src/Component/AddProducts/AddProduct';
import './App.css';
import ShowProduct from './src/Component/Products/ShowProducts'

const products_dummy_data = [
  {
    name: 'paper',
    description: ' Paper',
    amount: 94.12,
   
  },
  { 
    name: 'New TV', 
    description: 'sony tv',
    amount: 799.49, 
  },
  {
    name: 'Car Insurance',
    description: 'Insurance',
    amount: 294.67,
  
  },
  {
    name: 'New Desk (Wooden)',
    description: 'New Desk (Wooden)',
    amount: 450,
   
  },
];

const  App = ()  => {

  const [products, setProduct] = useState(products_dummy_data);

  const saveProductDataHandler = (product) => {
    setProduct((prevProducts) => {
      return [product, ...prevProducts];
    });
  };

  return (
      <div>
      <AddProduct onSaveProductData={saveProductDataHandler}/>
      <ShowProduct  items={products} />
    </div>
  );
}

export default App;
