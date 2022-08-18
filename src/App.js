import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {

  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route  path="/" element={<Home cart={cart} setCart={setCart}/>}/>
          <Route  path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
