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
        <Home/>
        <Login/>
        <Contact/>
        <About/>
        <Services/>
      </Navbar>
    </>
  );
}

export default App;
