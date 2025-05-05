import {createBrowserRouter} from "react-router";
import Root from "./Root";
import Error from "../Error";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>
    },
  ]);