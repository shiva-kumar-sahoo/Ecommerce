import { cookies } from "next/headers";

export default async function fetchData(props) {
  const api = `${process.env.BACKEND_URL}/${props}`;
  const cookieStore = cookies();
  const token = cookieStore
    .get("auth")
    .value.split(" ")[0]
    .replace(/(^"|"$)/g, "");
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    redirect: "follow",
    mode: "cors",
    cache: "no-store",
  };
  try {
    const response = await fetch(api, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Data fetching failed: Server Error" };
  }
}
