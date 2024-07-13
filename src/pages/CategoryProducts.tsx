/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import "../styles/Categories.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetCategoryProductsQuery } from "@/redux/api/catgoryApi";
import { TProducts } from "@/Types/types";
import { ErrorMessage } from "@/components/components/error-message";
import { IoMdArrowBack } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { options } from "@/utils/MultiSelectData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface TFilterItem {
  label: string;
  value: string;
}

const CategoryProducts = () => {
  const [selected, setSelected] = useState([]);
  const [filterProductName, setFilterProductName] = useState("");
  const [sorting, setSorting] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const getCategoryName = (path: string) => {
    const decodedPath = decodeURIComponent(path);
    const parts = decodedPath.split("/");
    const categoryName = parts[parts.length - 1];
    return categoryName.replace(/%20/g, " ");
  };

  const categoryName = getCategoryName(location.pathname);



  const filterData = selected.map((item: TFilterItem)=> item?.value)

 

  const { data, isLoading, error } = useGetCategoryProductsQuery({
    category: categoryName,
    searchTerm: filterProductName,
    sort: sorting,
    filter: filterData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSortChange = (value: string) => {
    setSorting(value);
  };

   const handleAll =()=>{
    setFilterProductName("")
    setSelected([])
    setSorting("")
   }

  return (
    <section className="my-10 ">
      <div>
        <button
          type="button"
          className="flex items-center justify-center gap-x-1"
          onClick={() => navigate(-1)}
        >
          <IoMdArrowBack /> Back
        </button>
        <h1 className="text-black font-semibold text-xl mt-3">
          {" "}
          Products of {categoryName}
        </h1>
      </div>
      <div className="flex justify-between my-5">
        <Button variant="outline" onClick={handleAll}>All</Button>
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-to-high">Low to high</SelectItem>
            <SelectItem value="high-to-low">High to low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <span> Search by product name</span>
          <Input
            placeholder="Search by product name"
            className="mb-5 mt-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFilterProductName(e.target.value)
            }
          />
        </div>
        <div>
          <span> Filter</span>
          <MultiSelect
            className="mt-2"
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
      </div>

      <div className="my-8">
        {
          // @ts-ignore
          error && <ErrorMessage messages={error?.data?.errorSources} />
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
        {data?.data &&
          data?.data?.map((product: TProducts, index: number) => (
            <Link key={index} to={`/category-products/${product?.category}/${product._id}`}>
              <div className="flex flex-col justify-between border rounded-lg">
                <div>
                  <img
                    src={product?.upload_image}
                    alt=""
                    className="w-full h-52 rounded-t-lg"
                  />

                  <div className="p-3">{product.product_name}</div>
                  <div className="p-3">
                    <span className="text-gray-900 text-lg font-medium">
                      {" "}
                      ${product?.price}
                    </span>
                  </div>
                  <div className="flex justify-center py-5">
                    <Button variant="primary" className="mt-2">
                      View details
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default CategoryProducts;
