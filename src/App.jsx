import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/:id' element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
