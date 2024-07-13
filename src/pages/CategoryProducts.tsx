/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useGetCategoryProductsQuery } from "@/redux/api/catgoryApi";
import { useGetCategoryProductsQuery } from "@/redux/api/catgoryApi";
import { useLocation } from "react-router-dom";

const CategoryProducts = () => {
  const location = useLocation();

  const getCategoryName = (path: string) => {
    const decodedPath = decodeURIComponent(path);
    const parts = decodedPath.split("/");
    const categoryName = parts[parts.length - 1];
    return categoryName.replace(/%20/g, " ");
  };

  const categoryName = getCategoryName(location.pathname);
  console.log(categoryName);

  const { data, isLoading, error } = useGetCategoryProductsQuery({
    category: categoryName,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);
  console.log(error);
  return <div>dfdfdfdfdfd</div>;
};

export default CategoryProducts;
