import { BrowserRouter, Routes, Route } from "react-router-dom";
import MagicNav from "./components/magicNav/MagicNav";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolios from "./pages/portfolios/Portfolios";

function App() {
  return (
    <BrowserRouter>
      <MagicNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
