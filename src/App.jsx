import './App.css';
import Navbar from './Component/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './Component/Slider/Slider'
import Service from './Component/Service/Service';
import Product from './Component/Product-section/Product';
// import Footer from './Component/Footer/Footer';

function App() {
  return (
    <><Navbar />
    <Slider/>
    <Service/>
    <Product/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
