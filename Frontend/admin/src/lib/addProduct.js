"use server";
import { cookies } from "next/headers";
export default async function addProduct(e) {
  const data = {
    name: e.get("name"),
    description: e.get("description"),
    price: e.get("price"),
    price: e.get("price"),
    images: e.get("images"),
    categories: e.get("categories"),
    stock: e.get("stock"),
  };

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (res.status !== 200) {
      return { error: result.message };
    }
    cookies().set("auth", JSON.stringify(result.accessToken), {
      httpOnly: true,
      path: "/",
    });
    return { message: result.message };
  } catch (error) {
    return { error: "Data fetching failed: Server Error" };
  }
}
