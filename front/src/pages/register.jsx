import React, { useState } from "react";

function register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangepass = (e) => {
    setPassword(e.target.value);
  };
  const onChangeuser = (e) => {
    setUsername(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status != 200) {
      alert("registration failed");
    }
  };

  return (
    <form className="register" onSubmit={handleRegister}>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={onChangeuser}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={onChangepass}
      />
      <button>Register</button>
    </form>
  );
}

export default register;
