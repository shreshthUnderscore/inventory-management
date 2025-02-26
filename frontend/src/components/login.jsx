import React from "react";

export default function Login() {
  return (
    <>
      <form action="/login" method="POST">
        <label>
          Username:
          <input name="username" type="text" required autoFocus></input>
        </label>
        <br />
        <label>
          Password:
          <input name="password" type="password" required></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
