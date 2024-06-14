import fetchData from "@/lib/fetchData";
import Link from "next/link";
import React from "react";

async function Users() {
  const path = "users";
  const usersData = await fetchData(path);
  if (usersData.error) {
    return (
      <div className="flex items-center mx-auto">
        <h1 className=" text-white ">{usersData.error}</h1>
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
                <th className="px-4 py-4 font-medium  text-white xl:pl-11">
                  Username
                </th>
                <th className="px-4 py-4 font-medium  text-white">Email</th>
                <th className="px-4 py-4 font-medium  text-white">Address</th>
                <th className="px-4 py-4 font-medium  text-white">View</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((item, key) => (
                <tr key={key}>
                  <td className="border-b  px-4 py-5 pl-9 border-strokedark xl:pl-11">
                    <h5 className="font-medium  text-white">{item.username}</h5>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark">
                    <p className=" text-white">{item.email}</p>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark">
                    <p className=" text-white">{item.address}</p>
                  </td>
                  <td className="border-b  px-4 py-5 border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <Link
                        href={`/users/${item._id}`}
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

export default Users;
