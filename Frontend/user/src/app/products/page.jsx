import Products from "@/components/client/Products";
import fetchData from "@/lib/fetchData";

async function ProductsPage() {
  const path = "product";
  const products = await fetchData(path);
  if (products.error) {
    return (
      <div className="flex items-center justify-center my-4">
        <h1 className=" text-black text-center text-3xl">{products.message}</h1>
      </div>
    );
  }
  return (
    <div>
      <Products productsData={products} />
    </div>
  );
}

export default ProductsPage;
