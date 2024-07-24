import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";


const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <>
      <div>
        <h1>Login/signup work</h1>
        <Button onClick={handleClick}>Login</Button>
        <Button onClick={handleClick}>Sign up</Button>
      </div>
    </>
  );
};

export default Login;
