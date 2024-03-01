import { BrowserRouter, Routes, Route } from "react-router-dom";
import MagicNav from "./components/magicNav/MagicNav";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MagicNav />
    </BrowserRouter>
  );
}

export default App;
