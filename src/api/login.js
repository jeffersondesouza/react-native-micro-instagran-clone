const login = async ({ userName, password }) => {
  const res = await fetch("http://10.0.2.2:3030/users/login", {
    method: "POST",
    body: JSON.stringify({ userName, password }),
    headers: { "Content-type": "application/json" }
  });

  if (res.ok) {
    const token = await res.headers.get("x-access-token");
    return token;
  } else {
    throw new Error("Não foi possível logar");
  }
};

export default login;
