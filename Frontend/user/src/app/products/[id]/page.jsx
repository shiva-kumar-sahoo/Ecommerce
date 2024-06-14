import fetchData from "@/lib/fetchData";
import SingleProduct from "@/components/client/SingleProduct";

async function ProductPage({ params }) {
  const path = `product/${params.id}`;
  const product = await fetchData(path);
  if (product.error) {
    return (
      <div className="flex items-center justify-center my-4">
        <h1 className=" text-black text-center text-3xl">{product.message}</h1>
      </div>
    );
  }
  return (
    <div>
      <SingleProduct productData={product} />
    </div>
  );
}

export default ProductPage;
