import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[85vh]">
      <h1 className="text-5xl text-blue-500 font-bold">404</h1>
      <p className="text-2xl font-semibold">
        Could not find requested resource
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
