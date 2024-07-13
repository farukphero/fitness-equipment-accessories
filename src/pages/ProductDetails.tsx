/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ErrorMessage } from "@/components/components/error-message";
import { Button } from "@/components/ui/button";
import usePageRefreshWarning from "@/hooks/usePageRefreshWarning";
import { useCreateCartMutation } from "@/redux/api/cartApi";
import { useGetSingleProductQuery } from "@/redux/api/catgoryApi";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetails = () => {
  const [count, setCount] = useState<number>(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error, refetch } = useGetSingleProductQuery(id);

  const [createCart, { isLoading: CartLoading, error: cartError }] =
    useCreateCartMutation();

    const shouldWarn = data?.data && Object.keys(data.data).length > 0;
    usePageRefreshWarning(shouldWarn);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  if (error) {
    console.log(error);
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(data.data.description, "text/html");
  const description = doc.body.innerText;

  const category = data?.data?.category;
  const formattedCategory = category
    .replace(/-/g, " ") 
    .replace(/^(.)/, (char: string) => char.toUpperCase())  
    .replace(/ (.)/g, (char: string) => char.toUpperCase());

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const handleAddToCart = async () => {
    const values = {
      product: data.data._id,
      quantity: count,
    };

    const res = await createCart(values).unwrap();
    if (res.success) {
      refetch();
      toast.success(res.message);
      navigate("/cart")
    }
  };

  const customMsg = [
    {
      path: "",
      message: "Quantity exceeds available stock.",
    },
  ];
  
  
  return (
    <div className="py-5 lg:py-5">
      <button
        type="button"
        className="flex items-center justify-center gap-x-1 mb-10"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack /> Back
      </button>
      <div className="grid gap-16 row-gap-8 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full   rounded shadow-lg h-[32rem]"
            src={data?.data?.upload_image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="bg-white border-l-4 border-l-[#D56128] shadow-sm border-deep-purple-accent-400">
            <div className="h-full w-full p-2 text-center text-xl border border-l-0 rounded-r font-bold">
              <p className="text-xl text-gray-900">{formattedCategory}</p>
            </div>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 mt-5 sm:leading-none">
              {data?.data?.product_name}
            </h2>
            <h2 className="max-w-lg mb-6 font-sans    tracking-tight text-gray-900  ">
              <span className=" font-semibold">Price:</span> ${" "}
              {data?.data?.price}
            </h2>
            <h2 className="max-w-lg mb-6 font-sans tracking-tight text-gray-900  ">
              <span className=" font-semibold"> Quantity:</span>{" "}
              {data?.data?.stock}
            </h2>
          </div>
          <div>
            <p className="text-sm text-gray-900">{description}</p>
          </div>
          <div className="flex gap-x-4 mt-8">
            <button onClick={handleDecrement}>
              <FaMinus className="h-10 w-10 md:h-12 md:w-12 border border-black rounded-full p-2 md:p-3" />
            </button>{" "}
            <button className="text-xl font-bold">{count}</button>{" "}
            <button onClick={handleIncrement}>
              <FaPlus className="h-10 w-10 md:h-12 md:w-12 border border-black rounded-full p-3 md:p-4" />
            </button>
          </div>
          <div className="mt-5">
            {(cartError ||
              data?.data?.stock === data?.data?.cart?.quantity) && (
              <ErrorMessage
                // @ts-ignore
                messages={cartError?.data?.errorSources || customMsg}
              />
            )}
          </div>
          <Button
            disabled={
              CartLoading || data?.data?.stock === data?.data?.cart?.quantity
            }
            onClick={handleAddToCart}
            variant="primary"
            className="w-full mt-5 py-5"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
