
import { useState } from 'react'
import Product from './components/ProductForm'




function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "lap", price: 250},
    { id: 2, name: "iphone", price: 600 } 
  ]);
  const addProduct = (product) => {
    const newId = products.map((i) => i.id) + 1;
    const newProduct = { ...product, id: newId };
    setProducts([...products, newProduct]);
  };
  const delProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }
  const increasePrice = (id) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, price: product.price + 50 } : product
    );
    setProducts(newProducts);
  };
  
  return (
    <>
      
      <Product onAdd={addProduct}></Product>
      <div className='flex  flex-col justify-center items-center'>
        {products.map((product) => (
          <li
            key={product.id}
           className="flex justify-between items-center m-4 p-4 border rounded-md bg-gray-200 shadow-lg w-1/2"
          >
                <span>{product.name}-$ { product.price}</span>  
                  <div>
              <button onClick={() => increasePrice(product.id)}
                              className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600"
              > increase price </button>     
              <button onClick={() => delProduct(product.id)}
                              className="bg-red-500 text-white p-2 m-2 rounded-md hover:bg-red-600"

              >Delete
              </button>
                  </div>
          </li>
        ))}
      </div>
  
    </>
  )
}

export default App
