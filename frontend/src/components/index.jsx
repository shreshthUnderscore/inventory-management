import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <h1>This is the main page !!</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/sign-up">Sign-Up</Link>
    </>
  );
};

export default Index;
