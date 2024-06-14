"use server";
export default async function login(e) {
  const data = {
    username: e.get("username"),
    email: e.get("email"),
    password: e.get("password"),
  };

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (res.status !== 201) {
      return { error: result.message };
    }
    return { message: result.message };
  } catch (error) {
    return { error: "Data fetching failed: Server Error" };
  }
}
