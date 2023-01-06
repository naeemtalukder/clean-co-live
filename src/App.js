import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Login from "./page/Login";
import Services from "./page/Services";


function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
