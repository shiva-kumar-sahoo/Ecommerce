"use client";
import Link from "next/link";
import signOut from "@/lib/signout";
function Header() {
  return (
    <>
      <header className="bg-gray-500 w-full h-16 flex justify-between ">
        <div className="items-center  w-full p-5">
          <input
            type="text"
            id="search-navbar"
            className="p-2  text-sm border  rounded-lg  text-gray"
            placeholder="Search..."
          />
        </div>
        <div className="flex justify-between items-center p-5 gap-5">
          <i className="bi bi-bell-fill text-2xl text-yellow-300 hover:text-yellow-400"></i>
          <Link href={"/dashboard/profile"}>
            <i className="bi bi-person-circle text-3xl text-sky-300 hover:text-sky-400"></i>
          </Link>
          <button
            className="w-24 text-white bg-red-600 hover:bg-red-700 focus:red-blue-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
