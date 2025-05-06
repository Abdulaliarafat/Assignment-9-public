import {createBrowserRouter} from "react-router";
import Root from "./Root";
import Error from "../Error";
import Home from "../Pages/Home";
import Companies from "../Components/Companies";
import CompaniesDetails from "../Pages/CompaniesDetails";
import Loading from "../Components/Loading";

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
    }
  ]);