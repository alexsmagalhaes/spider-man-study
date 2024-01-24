import { createBrowserRouter } from "react-router-dom";

//pages
import App from "@/App";
import NotFound from "@/pages/404";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
   {
     path: "/",
     element: <App />,
     errorElement: <NotFound/>,
     children:[
       {
         path: "/",
         element: <Home />
       },
     ]
   }, 
 ])