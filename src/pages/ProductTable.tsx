/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
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

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, error } = useGetAllProductsQuery({
    page: currentPage,
    limit,
  });

  const [deleteProduct] = useDeleteProductMutation();

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
        await deleteProduct(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section className="my-10">
      <div className="flex justify-end">
        <Link to="/create-product">
          <Button className="flex items-center justify-end h-10 px-6 font-medium rounded shadow-md hover:bg-[#D56128] bg-white focus:shadow-outline focus:outline-none hover:text-white  text-[#D56128] duration-700 ease-in-out border border-[#D56128]">
            Create New Product{" "}
          </Button>
        </Link>
      </div>
      <Table className="border rounded-md mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead >
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.products?.map((product: TProducts) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">
                {product.product_name}
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell  className=" space-x-3">
                <Link to={`/update-product/${product?._id}`}>
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => handleDelete(product?._id as string)}
                  className="text-center cursor-pointer"
                  variant="destructive"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
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

export default ProductTable;
