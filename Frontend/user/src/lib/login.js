"use server";
import { cookies } from "next/headers";
export default async function login(e) {
  const data = {
    email: e.get("email"),
    password: e.get("password"),
  };

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
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
