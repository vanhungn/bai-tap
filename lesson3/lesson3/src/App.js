import logo from './logo.svg';
import './App.css';
import ShopApp from './component/shopApp/ShopApp';
import Register from './component/register/Register';

function App() {
  return (
    
    <div className="App">
      
        <div className="shopApp">
            <ShopApp/>
        </div>
        <div className="register">
            <Register/>
        </div>
    </div>
  );
}

export default App;
