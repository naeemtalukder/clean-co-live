import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Navbar>
        <Routes>
          {/* <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/login" element={<Login/>} /> */}
          {publicRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
