
import './App.css';
import Header from './components/Header/Header';
import BodyApp from './components/BodyApp/BodyApp';
import { useState } from 'react';

const newProducts = [
  {
    name: "Óc chó vị caramel Nutty hũ 150g",
    price: "85000",
    priceOld: "90.000 đ",
    discount: "-6%",
    img: "./img1.jpg",
    id:1,
  },
  {
    name: "Hạt điều rang muối Thành Việt hủ 170g",
    price: "76000",
    priceOld: "80.000 đ",
    discount: "-5%",
    img: "./img2.jpg",
    id:2,
  },
  {
    name: "Hạt mắc ca Thành Việt hộp 400g",
    price: "170000",
    priceOld: "",
    discount: "",
    img: "./img3.jpg",
    id:3,
  },
  {
    name: "Ngũ cốc dinh dưỡng VinaCafe B'fast bịch 500g",
    price: "60000",
    priceOld: "100.000 đ",
    discount: "-40%",
    img: "./img4.jpg",
    id:4,
  },
];


function App() {
  const [count,setcout]=useState([]);
  return (
    <div className="App">
        <Header 
        count={count}/>
        <div className='container-xl productList'>
           <BodyApp
          setcout={setcout}
          count={count}
          newProducts={newProducts}
         />
        </div>
         
  
        
    </div>
  );
}

export default App;
