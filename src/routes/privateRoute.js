import About from "../page/About";
import Services from "../page/Services";

export const privateRoute = [
    {path:"/about", name: "About", Component: About},
    {path:"/services", name: "Services", Component: Services},
  ];