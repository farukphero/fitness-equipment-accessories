import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import CategoryProducts from "@/pages/CategoryProducts";
import Home from "@/pages/Home";
import ProductTable from "@/pages/ProductTable";
import ProductManagement from "@/pages/ProductManagement";
import EditProduct from "@/pages/EditProduct";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";

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
        {
          path: "category-products/:name/:id",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
     
     
  ]);
  
  
  
  export default router;