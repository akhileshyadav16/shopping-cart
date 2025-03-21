import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from './pages/Cart';
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-slate-400 min-h-screen w-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
} 

export default App;
