import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     </div> 
  );
}

//You can use <React.Fragment><React.Fragment/> instead of <></>. 
//js is written inside { }.

export default App;