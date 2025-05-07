import {createBrowserRouter} from "react-router";
import Root from "./Root";
import Error from "../Error";
import Home from "../Pages/Home";
import CompaniesDetails from "../Pages/CompaniesDetails";
import Loading from "../Components/Loading";
import LogInLayout from "../Pages/LogInLayout";
import LogIn from "../Components/LogIn.Jsx";
import Register from "../Components/Register";




export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          Component:Home
        },
      ]
    },
    {
      path:'/company/:id',
      Component:CompaniesDetails,
      loader:()=>fetch('/Company.json'),
      hydrateFallbackElement:<Loading></Loading>
    },
    {
      path:'/logInLayout',
      Component:LogInLayout,
      children:[
        {
          path:'/logInLayout/login',
         Component:LogIn
        },
        {
          path:'/logInLayout/register',
         Component:Register
        },
      ]
    }
  ]);