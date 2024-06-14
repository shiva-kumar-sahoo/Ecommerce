import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 focus:ring-blue-800">
        <Image
          src={"/robot.svg"}
          width={250}
          height={250}
          alt="logo"
          className=""
        />
        <h1 className="text-2xl text-white font-bold underline">Hello Admin</h1>
        <Link
          href={"/auth/login"}
          className="w-1/5 text-white bg-blue-700 hover:bg-blue-900 focus:ring-blue-800 focus:outline-none  font-medium rounded-lg text-md px-5 py-2.5  m-5 text-center"
        >
          Login
        </Link>
      </main>
    </>
  );
}
