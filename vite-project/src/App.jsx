import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./assets/pages/Menu";
import Contact from "./assets/pages/Contact";
import Offentime from "./assets/pages/Offentime";
import Gallery from "./assets/pages/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offentime" element={<Offentime />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
