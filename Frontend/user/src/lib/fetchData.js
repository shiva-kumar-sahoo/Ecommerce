export default async function fetchData(props) {
  const api = `${process.env.BACKEND_URL}/${props}`;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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
