"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function signOut() {
  cookies().delete("auth");
  redirect("/auth/login");
}
