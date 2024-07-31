const credentials = {
  username: "user123",
  password: "password123",
};

const login = (username, password) => {
  if (username == "") throw new Error("Username is required");
  if (password == "") throw new Error("Password is required");
  if (username !== credentials.username && password !== credentials.password)
    throw new Error("Invalid user and password");
else console.log("Login Successfully");
};

try {
  login("user123", "password123");
} catch (error) {
  console.log(error.message);
}
