import { RouteProps } from "react-router-dom";
import Home from "../../../components/public/home/Home";
import About from "../../../components/public/about/About";
import Benefits from "../../../components/public/benefits/Benefits";


const publicRoutes: RouteProps[] = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/projects",
        component:About
    },
    {
        path:"/technologies",
        component:Benefits
    },
]
export default publicRoutes;