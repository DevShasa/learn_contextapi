import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header length/>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
