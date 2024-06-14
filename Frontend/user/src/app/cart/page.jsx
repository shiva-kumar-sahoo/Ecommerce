"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "@/Redux/CartSlice";
import Image from "next/image";
import { toast } from "react-toastify";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(remove(id));
    toast.success("Product Removed from cart");
  };

  return (
    <div>
      <section className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 px-4 text-gray-600 dark:text-white">
        <div className="flex h-full flex-col justify-center">
          <div className="mx-auto min-w-[80vw] min-h-screen max-w-2xl rounded-sm border border-gray-200 bg-white dark:bg-gray-800 shadow-lg">
            <header className=" px-5 py-4">
              <div className="font-semibold text-gray-800 dark:text-white">
                Manage Carts
              </div>
            </header>

            <div className="overflow-x-auto p-3">
              <Table>
                <TableHeader className="text-md ">
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Product Image</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="text-lg">{item.name}</TableCell>
                        <TableCell className="w-32 h-32 object-cover mx-auto">
                          <Image
                            src={item?.images[0]}
                            width={100}
                            height={100}
                            alt={item.name}
                          />
                        </TableCell>
                        <TableCell className="text-lg">
                          {item.quantity ?? 1}
                        </TableCell>
                        <TableCell className="text-lg">
                          {item.price * (item.quantity ?? 1)}
                        </TableCell>
                        <TableCell>
                          <Trash
                            className=" text-red-500 hover:text-red-600 cursor-pointer"
                            onClick={() => {
                              handleRemoveItem(item._id);
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
              <div>Total</div>
              <div className="text-green-600">
                $
                <span>
                  {Math.round(
                    items.reduce((total, item) => total + item.price, 0)
                  )}
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="outline"
                className="m-4 w-2/4  md:w-1/4 h-16  bg-yellow-500 text-black hover:bg-yellow-600 hover:text-black rounded-lg text-md font-bold"
                disabled={items.length === 0}
              >
                Procced To Checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
