import {createBrowserRouter} from "react-router";
import Root from "./Root";
import Error from "../Error";
import Home from "../Pages/Home";
import CompaniesDetails from "../Pages/CompaniesDetails";
import Loading from "../Components/Loading";
import LogInLayout from "../Pages/LogInLayout";
import Register from "../Components/Register";
import MyProfile from "../Pages/MyProfile";
import Profile from "../Components/Profile";
import PrivateRoute from "../Auth/PrivateRoute";
import LogInPage from "../Components/LogInPage";




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
      element:(
        <PrivateRoute>
          <CompaniesDetails></CompaniesDetails>
        </PrivateRoute>
      ),
      loader:()=>fetch('/Company.json'),
      hydrateFallbackElement:<Loading></Loading>
    },
    {
      path:'/logInLayout',
      Component:LogInLayout,
      children:[
        {
          path:'/logInLayout/login',
         Component:LogInPage
        },
        {
          path:'/logInLayout/register',
         Component:Register
        },
      ]
    },
    {
      path:'/myProfile',
      Component:MyProfile,
      children:[
        {
          path:'/myProfile/profile',
          Component:Profile
        }
      ]
    }
  ]);