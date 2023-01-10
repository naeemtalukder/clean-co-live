import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// import Services from "./page/Services";
import PrivateRoute from "./authentication/PrivateRoute";
// import About from "./page/About";
import { privateRoute } from "./routes/privateRoute";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
          {privateRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
