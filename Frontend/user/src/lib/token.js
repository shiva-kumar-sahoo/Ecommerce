"use server";
import { cookies } from "next/headers";

export default async function authToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth")?.value;
  return token;
}
