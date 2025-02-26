import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch(`http://localhost:5000/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate("/category");
      } else {
        const result = await response.clone();
        console.error("Signup failed:", result.message);
      }
    } catch (error) {
      console.error("error during singup:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
