import DoMain from './components/domain/domain';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Product from './components/product/product';
import Test from './components/test/test';
import {useState,useEffect} from "react";
function App() {
  const [api,setApi]=useState([]);
    useEffect(()=>{
        fetch('https://64a69fd3096b3f0fcc8024d5.mockapi.io/api/products')
        .then((reponse)=>reponse.json())
        .then((json)=>setApi(json))
        .catch((err)=>console.log(err))
    },[]);
  return (
    <div className="container-xl App ">
      <div className='productList'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DoMain api={api}/>}/>
            <Route path="/card/:id" element={<Product apiProduct={api}/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
          </Routes>
        </BrowserRouter>
         
      </div>
    
    </div>
  );
}

export default App;
