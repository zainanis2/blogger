import React from 'react'

function register() {
  return (
    <form className="register">
        <h1>Register</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Register</button>
    </form>
  );
}

export default register