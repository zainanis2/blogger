import React, { useState } from "react";
import {Navigate} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redict,setRedirect]=useState(false);

  const onChangeuser = (e) => {
    setUsername(e.target.value);
  };

  const onChangepass = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body:JSON.stringify({username,password}),
      headers:{"Content-Type": "application/json" },
      credentials:"include",
    });
    console.log(response)
    if(response.ok)
    {
      setRedirect(true);
    }
    else
    {
      alert("Worng Credentials!!");
    }

  };

  if(redict)
  {
    return <Navigate to={"/"}/>
  }
  return (
    <form onSubmit={handleLogin} className="login">
      <h1>Login</h1>
      <input
        onChange={onChangeuser}
        value={username}
        type="text"
        placeholder="username"
      />
      <input
        onChange={onChangepass}
        value={password}
        type="password"
        placeholder="password"
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
