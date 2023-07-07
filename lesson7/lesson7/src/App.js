
import './App.css';
import FakeApi from './components/fake_API/fekeAPI';
import Header from './components/fake_API/headerCard';
import { useState } from 'react';
function App() {
  // useEffect(()=>{
  //  fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  // },[])
  const [count,setcout]=useState([]);
  return (
    <div className="">
        <Header
        count={count}/>
       <div className='container-xl productList'>
           <FakeApi
           setcout={setcout}
            count={count}
           />
          
        </div>
     
    </div>
  );
}

export default App;
