import HomeCarousel from "@/components/client/HomeCarousel";
import { LockKeyhole, Package, Phone, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Products from "@/components/client/Products";
import fetchData from "@/lib/fetchData";
export default async function Home() {
  const path = "product";
  const products = await fetchData(path);
  return (
    <main>
      <HomeCarousel />
      <div className="promot grid grid-cols-1 md:grid-cols-2 md:gap-5 p-5 my-5">
        <div className="text-bold text-5xl">
          <h1>The Best Place</h1>
          <h1>For Better Products</h1>
        </div>
        <div>
          <span className="text-xl text-bold">Fashion Zone </span>
          <span>
            is a online fashion store that offers a wide range of products.
          </span>
          <p>Established in 2024</p>
        </div>
      </div>
      <div className="features p-4">
        <div className="cards grid grid-cols-2 lg:grid-cols-4 gap-4 p-2">
          <Card className=" bg-slate-200 dark:bg-slate-600 border rounded-lg px-2">
            <CardHeader>
              <CardTitle className="text-xl">
                <Truck className="w-20 h-20 text-center text-xl text-gray-500 dark:text-white" />
                <span className="text-xl">Free Shipping</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-white">
                Order above $200
              </p>
            </CardContent>
          </Card>
          <Card className=" bg-slate-200 dark:bg-slate-600  border rounded-lg px-2">
            <CardHeader>
              <CardTitle className="text-xl">
                <Package className="w-20 h-20 text-center text-xl text-gray-500 dark:text-white" />
                <span className="text-xl">Easy Returns</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-white">
                7 Days easy return
              </p>
            </CardContent>
          </Card>
          <Card className=" bg-slate-200 dark:bg-slate-600 border rounded-lg px-2">
            <CardHeader>
              <CardTitle className="text-xl">
                <LockKeyhole className="w-20 h-20 text-center text-xl text-gray-500 dark:text-white" />
                <span className="text-xl">Secure Payment</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-white">
                Secure By UPI
              </p>
            </CardContent>
          </Card>
          <Card className=" bg-slate-200 dark:bg-slate-600 border rounded-lg px-2">
            <CardHeader>
              <CardTitle className="text-xl">
                <Phone className="w-20 h-20 text-center text-xl text-gray-500 dark:text-white" />
                <span className="text-xl">24*7 Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-white">
                Phone and Email support
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Products productsData={products} />
    </main>
  );
}
