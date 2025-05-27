import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path : '/' , 
        Component : RootLayout,
        children : [
            {
                index : true,
                Component : Home,
            },
            {
                path : '/register',
                Component : Register
            },
            {
                path : '/login',
                Component : Login
            }
        ]
    }
])