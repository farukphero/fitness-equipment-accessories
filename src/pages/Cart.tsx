/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/api/catgoryApi";
import { TProducts } from "@/Types/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteCartMutation,
  useGetAllCartsQuery,
  useUpdateCartMutation,
} from "@/redux/api/cartApi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Cart = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, refetch } = useGetAllCartsQuery({
    page: currentPage,
    limit,
  });

  const [deleteCart] = useDeleteCartMutation();
  const [updateCart, { error }] = useUpdateCartMutation();

  const totalCount = data?.data?.meta?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / limit);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleDelete = async (id: string) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteCart(id);
        console.log(res);
        Swal.fire({
          title: "Deleted!",
          text: "Your cart has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleIncrement = async (cartId: string, currentQuantity: number) => {
    const values = {
      id: cartId,
      data: { quantity: currentQuantity + 1 },
    };

    const res = await updateCart(values);

    if (res?.data?.success) {
      refetch();
    }
  };

  const handleDecrement = async (cartId: string, currentQuantity: number) => {
    if (currentQuantity <= 1) return;

    const lessQuantity = currentQuantity - 1;

    const values = {
      id: cartId,
      data: { quantity: lessQuantity },
    };

    const res = await updateCart(values);
    if (res?.data?.success) {
      refetch();
    }
  };
  // @ts-ignore
  if (error && error?.status === 409) {
    // @ts-ignore
    toast.error(error.data.message);
  }

  const totalPrice =
    data?.data?.carts?.reduce((acc: any, cart: any) => acc + cart.price, 0) ||
    0;

  return (
    <section className="my-10">
      <div className="text-black font-semibold text-xl">My Cart</div>
      <Table className="border rounded-md mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead colSpan={3} className="text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.carts?.map((cart: any) => (
            <TableRow key={cart._id}>
              <TableCell className="font-medium">
                {cart?.product?.product_name}
              </TableCell>
              <TableCell className="space-x-3">
                <button
                  onClick={() => handleDecrement(cart._id, cart.quantity)}
                >
                  <FaMinus
                    className={cn(
                      "h-6 w-6 border border-black rounded-full p-1",
                      cart.quantity === 1 && "border-gray-400 text-gray-400"
                    )}
                  />
                </button>{" "}
                <button className="text-xl font-bold">{cart.quantity}</button>{" "}
                <button
                  onClick={() => handleIncrement(cart._id, cart.quantity)}
                  disabled={cart?.product?.stock === cart.quantity}
                >
                  <FaPlus
                    className={cn(
                      "h-6 w-6 border border-black rounded-full p-1",
                      cart?.product?.stock === cart.quantity &&
                        "border-gray-400 text-gray-400"
                    )}
                  />
                </button>
              </TableCell>

              <TableCell>{cart.price}</TableCell>

              <TableCell className="text-center cursor-pointer space-x-5">
                {cart?.product?.stock === cart.quantity ? (
                  <span className="cursor-not-allowed">
                    <Button disabled>Order now</Button>
                  </span>
                ) : (
                  <Link to={`/order/${cart?._id}`}>
                    <Button>Order now</Button>
                  </Link>
                )}

                <Button
                  onClick={() => handleDelete(cart?._id as string)}
                  variant="destructive"
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} className="font-bold text-right">
              Total Price:
            </TableCell>
            <TableCell colSpan={1}>{totalPrice.toFixed(0)}</TableCell>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Pagination className="mt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className={
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : " cursor-pointer"
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{totalPages}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={
                currentPage >= totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Cart;
