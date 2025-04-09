import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import About from './components/pages/About';
import Services from './components/pages/Services';
import { CartProvider } from "./context/CartContext"; 
function App() {
  return (
    <div className="App">
       <CartProvider>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
