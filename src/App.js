import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import WhatsApp from "./components/pages/whatApp/WhatsApp";
import MoreProducts from "./components/pages/moreProducts/MoreProducts";
import Error from "./components/pages/error/Error";

function App() {
  return (
    <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/whatsapp" element={<WhatsApp />}/>
      <Route path="/moreproducts" element={<MoreProducts />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
  <Footer />
    </>
  );
}

export default App;
