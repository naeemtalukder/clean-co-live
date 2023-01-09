import Contact from "../page/Contact";
// import About from "../page/About";
import Login from "../page/Login";
// import Services from "../page/Services";
import Home from "../page/home/Home";

export const publicRoute = [
    {path:"/", name: "Home", Component: Home},
    // {path:"/about", name: "About", Component: About},
    // {path:"/services", name: "Services", Component: Services},
    {path:"/contact", name: "Contact", Component: Contact},
    {path:"/login", name: "Login", Component: Login}
  ]