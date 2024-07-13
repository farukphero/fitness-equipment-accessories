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

import { useState } from "react";
import { Button } from "@/components/ui/button";

import Swal from "sweetalert2";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
} from "@/redux/api/orderApi";
import usePageRefreshWarning from "@/hooks/usePageRefreshWarning";

const MyOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { data, isLoading } = useGetAllOrdersQuery({
    page: currentPage,
    limit,
  });

  const [deleteOrder] = useDeleteOrderMutation();

  const totalCount = data?.data?.meta?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / limit);

  const shouldWarn = data?.data?.orders?.length > 0;
  usePageRefreshWarning(shouldWarn);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
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
        await deleteOrder(id);
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
      <div>
        <h2 className="text-black font-semibold text-xl md:text-3xl">
          My Orders{" "}
        </h2>
      </div>
      <Table className="border rounded-md mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone number</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.orders?.map((order: any) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order.full_name}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.phone_number}</TableCell>
              <TableCell>{order?.cart?.price}</TableCell>
              <TableCell className=" space-x-3">
                <Button
                  onClick={() => handleDelete(order?._id as string)}
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

export default MyOrder;
