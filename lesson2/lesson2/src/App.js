import './App.css';
import Card from './Card';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder='Enter your task here...' className="input"/>
      <> <Card text="Clear up bedroom"/>
      <Card text="Buy some milk"/>
      <Card text="Jogging"/>
      <Card text="Learn React"/>
      <Card text="Doing Exercises"/>
      </>
     
      <Footer/>
    </div>
  );
  };
export default App;
