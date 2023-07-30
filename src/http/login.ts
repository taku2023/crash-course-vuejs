export const login: (_: {
  email: string;
  password: string;
}) => Promise<{ ok: boolean; message?: string }> = async (data) => {
  const result = await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (result.ok) {
    return Promise.resolve({ ok: true });
  } else {
    const json = await result.json();
    return Promise.resolve({
      ok: false,
      message: json["message"],
    });
  }
};
