/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCreateProductMutation } from "@/redux/api/catgoryApi";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SuccessMessage } from "@/components/components/success-message";
import { ErrorMessage } from "@/components/components/error-message";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateOrderMutation } from "@/redux/api/orderApi";

const OrderPage = () => {
  const [method, setMethod] = useState(false);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [createOrder, { data, isLoading, error }] = useCreateOrderMutation();

  const onSubmit: SubmitHandler<any> = async (values) => {
    values.cart = id;
    const res = await createOrder(values).unwrap();

    if (res.success) {
      navigate("/my-orders");
      toast.success(res.message);
    }
  };

  const handleMethod = () => {
    setMethod(!method);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div>
              <Label htmlFor="user_name">Full Name</Label>

              <Input
                className="w-full mt-2"
                id="user_name"
                placeholder="Your full name"
                {...register("full_name")}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>

              <Input
                className="w-full mt-2"
                id="email"
                placeholder="Enter your email"
                {...register("email")}
                type="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="phone_number">Phone number</Label>

              <Input
                className="w-full mt-2"
                id="phone_number"
                placeholder="Enter your phone number"
                {...register("phone_number")}
              />
            </div>
            <div>
              <Label htmlFor="delivery_address">Delivery Address</Label>

              <Input
                className="w-full  mt-2"
                id="delivery_address"
                placeholder="Delivery Address"
                {...register("delivery_address")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="delivery_method">Payment Method</Label>
              <h2 className="flex items-center gap-x-2 mt-2">
                <Checkbox
                  id="delivery_method"
                  {...register("delivery_method")}
                  onClick={handleMethod}
                  checked={method}
                />
                Cash on delivery
              </h2>
              <div className="items-top flex space-x-2"></div>
            </div>
          </div>
        </div>

        <div className="my-2">
          {
            // @ts-ignore
            error && <ErrorMessage messages={error?.data?.errorSources} />
          }
          {
            // @ts-ignore
            !error && <SuccessMessage messages={data?.message} />
          }
        </div>
        <div className="flex justify-end mt-5 mb-8">
          <Button disabled={isLoading || !method}>Place Order</Button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
