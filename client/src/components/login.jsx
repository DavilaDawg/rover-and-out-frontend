import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <>
      <div>
        <h1>Login/signup work</h1>
        <button onClick={handleClick}>Login</button>
        <button onClick={handleClick}>Sign up</button>
      </div>
    </>
  );
};

export default Login;
