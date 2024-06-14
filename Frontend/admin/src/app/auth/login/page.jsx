"use client";
import { toast } from "react-toastify";
import { useRef } from "react";
import { redirect } from "next/navigation";
import login from "@/lib/login";
export default function Login() {
  const ref = useRef();
  return (
    <>
      <section className="w-full bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 className="flex items-center mb-6 text-2xl font-semibold text-white border-b-2 border-blue-600">
            Ecom Admin
          </h1>
          <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                ref={ref}
                action={async (e) => {
                  ref.current.reset();
                  const result = await login(e);
                  if (result.error) {
                    toast.error(result.error, {
                      closeOnClick: true,
                      pauseOnHover: false,
                      progress: undefined,
                    });
                  } else {
                    toast.success(result.message, {
                      closeOnClick: true,
                      pauseOnHover: false,
                      progress: undefined,
                    });
                    redirect("/dashboard");
                  }
                }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <a
                    href="#"
                    className="text-sm font-medium  hover:underline text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
