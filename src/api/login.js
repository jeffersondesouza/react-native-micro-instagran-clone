const login = async ({ userName, password }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({ userName, password }),
    headers: { "Content-type": "application/json" }
  });

  if (res.ok) {
    const token = 'token12345';
    return token;
  } else {
    throw new Error("Não foi possível logar");
  }
};

export default login;
