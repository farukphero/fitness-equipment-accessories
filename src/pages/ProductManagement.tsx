/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "../styles/Categories.css";
import JoditEditor, { Jodit } from "jodit-react";
import { ChangeEvent, useRef, useState } from "react";
import { joditConfig as baseConfig } from "@/config";
import uploadFile from "@/helper/ImageUploder";
import { CloudUpload } from "lucide-react";
import { useCreateProductMutation } from "@/redux/api/catgoryApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@/components/components/error-message";
import { SuccessMessage } from "@/components/components/success-message";
import { TProducts } from "@/Types/types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProductManagement = () => {
  const editor = useRef<Jodit | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
   
  } = useForm<TProducts>();
  const navigate = useNavigate();

  const [createProduct, { data, isLoading, error }] =
    useCreateProductMutation();

  const joditConfig = {
    ...baseConfig,
    height: "350px",

    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "superscript",
      "subscript",
      "ul",
      "ol",
      "font",
      "fontsize",
      "paragraph",
      "image",
      "link",
      "align",
      "undo",
      "redo",
    ],
    uploader: {
      ...baseConfig.uploader,
      defaultHandlerSuccess: function (data: any) {
        const files = data?.files || [];
        if (files.length) {
          const editorInstance = editor?.current;
          if (editorInstance) {
            editorInstance.selection.insertImage(files[0], null, 250);
          }
        }
      },
    },
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (!file) return;

    setLoading(true);

    try {
      const uploadPhoto = await uploadFile(file);
      setImageUrl(uploadPhoto?.secure_url);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<TProducts> = async (values) => {
    values.description = content;
    values.upload_image = imageUrl as string;
    values.price = Number(values.price);
    values.stock = Number(values.stock);
    const res = await createProduct(values).unwrap();
    if (res.success) {
      navigate("/product-management");
      toast.success(res.message);
    }
  };

  const handleCategoryChange = (value: string) => {
    setValue("category", value);
  };

  return (
    <div className="my-10">
       
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-black font-semibold text-xl md:text-3xl">Create product</CardTitle>
          <CardDescription>
            Create your new product in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <div>
                  <Label htmlFor="product_name">Product Name</Label>

                  <Input
                    className="w-full mt-2"
                    id="product_name"
                    placeholder="Name of your product"
                    {...register("product_name")}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price of product</Label>

                  <Input
                    className="w-full mt-2"
                    id="price"
                    placeholder="Price of your product"
                    {...register("price")}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <div className="jodit-container">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={joditConfig}
                    onBlur={(newContent) => setContent(newContent)}
                    className="h-20"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="upload_image">Upload Image</Label>
                <Input
                  id="upload_image"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {!imageUrl && (
                  <div className="my-10 h-40 w-60 border rounded-xl flex justify-center items-center p-5">
                    <label
                      htmlFor="upload_image"
                      className="cursor-pointer py-2 rounded-md shadow-[rgba(0, 0, 0, 0.1) 0px 1px 2px 0px] "
                    >
                      <div className="flex justify-center">
                        <CloudUpload className="h-10 w-10 flex justify-center" />
                      </div>
                      <h2>
                        {loading ? "Loading..." : "Choose File to Upload"}
                      </h2>
                    </label>
                  </div>
                )}
                {imageUrl && !loading && (
                  <div className="my-10 h-40 w-60">
                    <label htmlFor="files">
                      <img
                        src={imageUrl}
                        alt=""
                        style={{ borderRadius: "8px" }}
                        className="h-40 w-40"
                      />
                    </label>
                  </div>
                )}
                {loading && imageUrl && (
                  <div className="my-10 h-40 w-60 flex justify-center items-center">
                    Loading...
                  </div>
                )}

                {imageUrl && (
                  <div>
                    <label htmlFor="upload_image">
                      <h2 className="bg-gray-900 text-white w-32 h-10 cursor-pointer font-semibold flex justify-center items-center rounded-xl hover:bg-gray-800">
                        Change
                      </h2>
                    </label>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <Label htmlFor="category" className="mb-2">
                    Category
                  </Label>
                  <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger id="category" className="w-full mt-2">
                      <SelectValue
                        placeholder="Select"
                        {...register("category")}
                      />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="w-full"
                      {...register("category")}
                    >
                      <SelectItem value="cable-machines">
                        Cable Machines
                      </SelectItem>
                      <SelectItem value="benches">Benches</SelectItem>
                      <SelectItem value="barbells">Barbells</SelectItem>
                      <SelectItem value="squat-power-racks">
                        Squat & Power Racks
                      </SelectItem>
                      <SelectItem value="lower-body-legs">
                        Lower Body & Legs
                      </SelectItem>
                      <SelectItem value="body-weight-gymnastics">
                        Body Weight & Gymnastics
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="stock">Stock</Label>

                  <Input
                    className="w-full  mt-2"
                    id="stock"
                    placeholder="Price of your product"
                    type="number"
                    {...register("stock")}
                  />
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
            <CardFooter className="flex justify-end mt-5">
              <Button disabled={isLoading || loading}>Add Product</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductManagement;
