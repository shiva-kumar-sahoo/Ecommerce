import fetchData from "@/lib/fetchData";

export default async function Home() {
  const products = await fetchData("products");
  return (
    <>
      <section className="min-h-[80vh] flex gap-4 p-5">
        <div className="product-card">
          <div className="block p-6 border  rounded-lg shadow bg-white ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Total products
            </h5>
            <p className="font-normal text-center text-2xl text-gray-700 ">
              {products?.length}
            </p>
          </div>
        </div>
        <div className="order-card">
          <div className="block p-6 border  rounded-lg shadow bg-white ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Total Orders
            </h5>
            <p className="font-normal text-center text-2xl text-gray-700 ">
              10
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
