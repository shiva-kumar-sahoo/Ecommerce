"use client";

import { add } from "@/Redux/CartSlice";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function SingleProduct({ productData }) {
  const product = productData;
  const [selectedImage, setselectedImage] = useState(productData?.images[0]);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(add(product));
    toast.success("Product added to cart");
  };

  return (
    <div className="p-5 m-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="flex flex-col items-center">
          <div className="h-[70%] w-[70%] object-cover ">
            <Image
              src={selectedImage}
              alt="product"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
          <div className="">
            <div className="flex flex-row  gap-2 min-w-60 min-h-[40vh]">
              {product?.images?.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="h-32 aspect-square overflow-hidden rounded-lg border-2 border-gray-300 dark:border-gray-600 text-center"
                  >
                    <Image
                      className="h-full w-full object-contain cursor-pointer"
                      src={img}
                      alt="Image"
                      width={100}
                      height={100}
                      onClick={() => setselectedImage(img)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-md text-justify my-2">{product.description}</p>
          <div className="flex flex-wrap my-2">
            {product?.categories?.map((cat, index) => {
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="m-2 bg-gray-500 text-md text-white"
                >
                  {cat}
                </Button>
              );
            })}
          </div>
          <div className="my-2">
            {product.stock > 0 ? (
              <span className="text-gray-500 text-md">In Stock: </span>
            ) : (
              <span className="text-red-500 text-md">Out of Stock</span>
            )}
            <span className="text-xl">{product.stock}</span>
          </div>
          <div className="flex items-end my-2">
            <h1 className="text-3xl font-bold text-green-500">
              ${product.price}
            </h1>
          </div>
          <div className="flex justify-end">
            <Button
              variant="outline"
              className="m-4 w-2/4  md:w-1/4 h-16  bg-yellow-500 text-black hover:bg-yellow-600 hover:text-black rounded-lg text-md font-bold"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
