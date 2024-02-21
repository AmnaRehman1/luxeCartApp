import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Herosection from './components/HeroSection';
import Cards from './components/Cards';
import AllProduct from './components/AllProducts';
import {ProductDescription} from "./components/ProductDetail";
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/Products'} element={<AllProduct />} />
        <Route path={'/products/:productId'} element={<ProductDescription />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Herosection />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
