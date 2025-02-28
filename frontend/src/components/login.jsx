import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch(
        `${import.meta.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Important for sending cookies
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        // Store authentication state
        localStorage.setItem("isAuthenticated", "true");
        navigate("/category");
      } else {
        const error = await response.json();
        console.error("Login failed:", error.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
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
