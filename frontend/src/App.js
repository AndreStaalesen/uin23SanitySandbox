import './App.css';
import {useEffect, useState} from 'react'
import { fetchAllProducts } from './lib/sanity/productServices';
import FrontPage from './components/pages/FrontPage';
import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {

const [prods, setProds] = useState(null)

const getProducts = async () => {
  const data = await fetchAllProducts()
  setProds(data)
}

useEffect(() => {
  getProducts()
},[])
console.log(prods)

  return (
    <Routes>
      <Route index element={<FrontPage products={prods}/>}/>
</Routes>

  );
}

export default App;
