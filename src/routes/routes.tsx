import App from "@/App";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element:  <App/>,
      children: [
        {
            index: true,  
            element: <Home/> ,
          },
  
        // {
        //   path: "about",
        //   element: <About />,
        // },
        // {
        //   path: "contact",
        //   element: <Contact />,
        // },
      ],
    },
    // {
    //   path: "/admin",
    //   element: <App />,
    //   children: [
    //     // {
    //     //     index: true,  atar mane hosse '/' a aslei about component ar data show korbe
    //     //     element: <About />,
    //     //   },
  
    //     {
    //       index: true,
    //       element: <AdminDashboard />,
    //     },
    //     {
    //       path: "dashboard",
    //       element: <AdminDashboard />,
    //     },
    //     {
    //       path: "create-student",
    //       element: <CreateStudent />,
    //     },
    //     {
    //       path: "create-admin",
    //       element: <CreateAdmin />,
    //     },
    //     {
    //       path: "create-faculty",
    //       element: <CreateFaculty />,
    //     },
    //   ],
    // },
     
  ]);
  
  
  
  export default router;