import Image from "next/image";
import Link from "next/link";
import fetchData from "@/lib/fetchData";

async function Products() {
  const path = "products";
  const productsData = await fetchData(path);
  if (productsData.error) {
    return (
      <div className="flex items-center mx-auto">
        <h1 className=" text-white ">{productsData.error}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-[80vh]">
        <div className="flex justify-end mr-4 my-4">
          <Link href="/dashboard/products/add">
            <button className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded">
              Add Product
            </button>
          </Link>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left ">
                <th className="px-4 py-4 font-extrabold  text-white ">
                  Product Name
                </th>
                <th className="px-4 py-4 font-extrabold  text-white">Price</th>
                <th className="px-4 py-4 font-extrabold  text-white">Image</th>
                <th className="px-4 py-4 font-extrabold  text-white">
                  Categories
                </th>
                <th className="px-4 py-4 font-extrabold  text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((item, key) => (
                <tr key={key}>
                  <td className="border-b  px-4 py-5 border-strokedark ">
                    <h5 className="font-bold  text-white">{item.name}</h5>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark ">
                    <h5 className="font-medium  text-green-500">
                      {item.price}
                    </h5>
                  </td>
                  <td className="border-b border-strokedark">
                    <div>
                      {item.images ? (
                        <Image
                          src={item.images[0]}
                          alt="product image"
                          width={100}
                          height={100}
                          className="w-[10vw] h-[30vh] object-contain"
                        />
                      ) : (
                        "No Image"
                      )}
                    </div>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark">
                    <h5 className="text-white">
                      {item.categories.map((cat) => `${cat},`)}
                    </h5>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark">
                    <div className="flex items-center space-x-3">
                      <Link
                        href={`/dashboard/products/${item._id}`}
                        className="hover:text-primary text-blue-500 text-2xl"
                      >
                        <i className="bi bi-eye "></i>
                      </Link>
                      <Link
                        href={`/dashboard/products/${item._id}`}
                        className="hover:text-primary text-yellow-500 text-2xl"
                      >
                        <i className="bi bi-pencil "></i>
                      </Link>
                      <Link
                        href={`/dashboard/products/${item._id}`}
                        className="hover:text-primary text-red-500 text-2xl"
                      >
                        <i className="bi bi-trash-fill "></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
