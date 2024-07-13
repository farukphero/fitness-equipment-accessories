import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import CategoryProducts from "@/pages/CategoryProducts";
import Home from "@/pages/Home";
import ProductTable from "@/pages/ProductTable";
import ProductManagement from "@/pages/ProductManagement";
import EditProduct from "@/pages/EditProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element:  <App/>,
      children: [
        {
            index: true,  
            element: <Home/> ,
          },
  
        {
          path: "category-products/:name",
          element: <CategoryProducts />,
        },
        {
          path: "product-management",
          element: <ProductTable />,
        },
        {
          path: "create-product",
          element: <ProductManagement />,
        },
        {
          path: "update-product/:id",
          element: <EditProduct />,
        },
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