import Link from "next/link";
import fetchData from "@/lib/fetchData";

async function Orders() {
  const path = "orders";
  const ordersData = await fetchData(path);
  if (ordersData.error) {
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl ">{ordersData.error}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-[80vh]">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left">
                <th className="px-4 py-4 font-medium  text-white ">
                  User Name
                </th>
                <th className="px-4 py-4 font-medium  text-white">Product</th>
                <th className="px-4 py-4 font-medium  text-white">Quantity</th>
                <th className="px-4 py-4 font-medium  text-white">Price</th>
                <th className="px-4 py-4 font-medium  text-white">Status</th>
                <th className="px-4 py-4 font-medium  text-white">View</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((item, key) => (
                <tr key={key}>
                  <td className="border-b  px-4 py-5 border-strokedark ">
                    <h5 className="font-medium  text-white">{item.username}</h5>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark ">
                    <h5 className="font-medium  text-white">
                      {item.productname}
                    </h5>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark">
                    <h5 className="text-white">{item.quantity}</h5>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark">
                    <h5 className="text-green-500">{item.amount}</h5>
                  </td>
                  <td className="border-b px-4 py-5 border-strokedark">
                    <h5 className="text-white">
                      {item.status === "completed" ? (
                        <p className="text-green-500">{item.status}</p>
                      ) : item.status === "cancelled" ? (
                        <p className="text-red-500">{item.status}</p>
                      ) : item.status === "pending" ? (
                        <p className="text-yellow-500">{item.status}</p>
                      ) : (
                        <p className="text-gray-500">{item.status}</p>
                      )}
                    </h5>
                  </td>

                  <td className="border-b  px-4 py-5 border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <Link
                        href={`/dashboard/orders/${item._id}`}
                        className="hover:text-primary text-blue-500 text-xl"
                      >
                        <i className="bi bi-eye "></i>
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

export default Orders;
