import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../Pages/Layout";
import LoginForm from "../Components/LoginForm";
import Signup from "../Components/Signup";
import AddArtifact from "../Components/AddArtifacts";
import PrivateRoute, { CrashLogin } from "./PrivateRoute";
import Artifacts from "../Components/Artifacts";
import DetailsArtifact from "../Components/DetailsArtifact";
import MyArtifacts from "../Components/MyArtifacts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/artifacts",
                element: <Artifacts />
            },
            {
                path: "/auth",
                element: <CrashLogin>
                    <LoginForm />
                </CrashLogin>

            },
            {
                path: "/reg",
                element: <CrashLogin>
                    <Signup />
                </CrashLogin>

            },
            {
                path: "/artifacts/add",
                element: <PrivateRoute>
                    <AddArtifact />
                </PrivateRoute>
                 
            }
            ,
            {
                path: "/artifacts/:id",
                element: <PrivateRoute>
                    <DetailsArtifact />
                </PrivateRoute>
                 
            }
            ,
            {
                path: "/artifacts/user/:id",
                element: <PrivateRoute>
                    <MyArtifacts />
                </PrivateRoute>
                 
            }
            
        ]

    },
])