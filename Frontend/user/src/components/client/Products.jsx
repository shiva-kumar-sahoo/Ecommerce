"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { add } from "@/Redux/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
function Products({ productsData }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(add(product));
    toast.success("Product added to cart");
  };
  if (!productsData.length) {
    return (
      <div className="flex items-center justify-center my-4">
        <h1 className=" text-black text-center text-3xl">
          {productsData.message}
        </h1>
      </div>
    );
  }
  const products = productsData;

  return (
    <div className="latest-product p-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 p-2">
        {products &&
          products?.map((data, index) => {
            return (
              <Card
                key={index}
                className="w-full bg-slate-300 border rounded-lg"
              >
                <figure>
                  <Link
                    href={`/products/${data._id}`}
                    className="relative aspect-square w-full"
                  >
                    <Image
                      src={data.images[0]}
                      alt={data.images[0]}
                      width={100}
                      height={100}
                      placeholder="blur"
                      blurDataURL={"product"}
                      className="w-full h-60 object-contain"
                    />
                  </Link>
                </figure>
                <CardHeader>
                  <CardTitle className="text-xl text-black">
                    {data.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <p className="text-md text-gray-500 ">
                    Rattings:{data.ratting}
                  </p>
                  <p className="text-3xl text-green-500">${data.price}</p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleAddToCart(data)}
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
