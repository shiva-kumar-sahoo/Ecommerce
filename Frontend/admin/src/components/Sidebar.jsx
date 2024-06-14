import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <>
      <section className="text-center overflow-y-auto bg-gray-800 min-h-screen p-5">
        <Link href="/dashboard">
          <i className="bi bi-emoji-smile-fill text-white text-3xl font-mono "></i>
        </Link>
        <hr className="my-5" />
        <ul className="space-y-2 font-medium  text-white text-xl p-10 text-center">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group "
            >
              <i className="bi bi-house"></i>
              <span className="hidden md:inline">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/users"
              className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
            >
              <i className="bi bi-people-fill"></i>
              <span className="hidden md:inline">Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
              className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
            >
              <i className="bi bi-cart-fill"></i>
              <span className="hidden md:inline">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/orders"
              className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
            >
              <i className="bi bi-cart-fill"></i>
              <span className="hidden md:inline">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/analytics"
              className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
            >
              <i className="bi bi-bar-chart-fill"></i>
              <span className="hidden md:inline">Analytics</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Sidebar;
