import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";
import PrivateRouter from "./PrivateRouter";
import ApplyJob from "../pages/ApplyJob";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/Addjob/Addjob";
import MyPostedJob from "../pages/MyPostedjob/MyPostedJob";
import ViewApplication from "../pages/MyPostedjob/ViewApplication";

export const router = createBrowserRouter([
    {
        path : '/' , 
        Component : RootLayout,
        errorElement : <div>This PAge Error 401 403</div>,
        children : [
            {
                index : true,
                Component : Home,
            },
            {
                path : '/job-details/:id',
                element : <PrivateRouter><JobDetails/></PrivateRouter>,
                loader : ({params}) => fetch(`http://localhost:2100/jobs/${params.id}`)
            },
            {
                path : '/job-apply/:id',
                element : <PrivateRouter><ApplyJob/></PrivateRouter>,
                // loader : ({params}) => fetch(`http://localhost:2100/jobs/${params.id}`)
            },
            {
                path : '/my-applications',
                element : <PrivateRouter><MyApplication/></PrivateRouter>,
                // loader : ({params}) => fetch(`http://localhost:2100/jobs/${params.id}`)
            },
            {
                path : '/add-job',
                element : <PrivateRouter><AddJob/></PrivateRouter>,
            },
            {
                path : '/my-posted-job',
                element : <PrivateRouter><MyPostedJob/></PrivateRouter>,
            },
            {
                path : '/applications/:job_id',
                element : <PrivateRouter><ViewApplication/></PrivateRouter>,
                loader : ({params}) => fetch(`http://localhost:2100/applications/job/${params.job_id}`)
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
    },
    {
        path : '/*',
        element : <div>This Page busy so not found</div>
    }
])