import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../Pages/Layout";
import LoginForm from "../Components/LoginForm";
import Signup from "../Components/Signup";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path:"/auth",
                element: <LoginForm/>
            },
            {
                path:"/reg",
                element: <Signup/>
            },
        ]

    },
])