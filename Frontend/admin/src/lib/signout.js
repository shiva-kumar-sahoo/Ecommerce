"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function signOut(data) {
  cookies().delete("auth");
  redirect("/auth/login");
}
