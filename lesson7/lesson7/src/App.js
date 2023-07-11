
import './App.css';
import FakeApi from './components/fake_API/fekeAPI';
import Header from './components/fake_API/headerCard';
import { useState } from 'react';
import { Mystor } from './conText/myStore';
function App() {
  // useEffect(()=>{
  //  fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  // },[])
  const [count,setcout]=useState([]);
  return (
   < Mystor.Provider value={{
    count,
    setcout,
   }}>
   <div className="">
        <Header/>
       <div className='container-xl productList'>
           <FakeApi />
          
        </div>
     
    </div>
   </Mystor.Provider>
    
  );
}

export default App;
