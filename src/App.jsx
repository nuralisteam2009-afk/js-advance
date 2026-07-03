import './App.css';
import {Routes, Route} from "react-router";
import Home from "./Home";
import About from "./About";
import Header from './Components/Header';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App;
