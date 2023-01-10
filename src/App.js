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
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./page/dashboard/Dashboard";
import AddAdmin from "./page/dashboard/AddAdmin";
import AddServices from "./page/dashboard/AddServices";


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
          <Route element={<AdminRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>} >
              <Route path="/dashboard/add-admin" element={<AddAdmin/>} />
              <Route path="/dashboard/add-services" element={<AddServices/>} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
