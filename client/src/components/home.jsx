import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      <div>
        <h1>Rover&Out home works!</h1>
        <p>List of technologies and libraries:</p>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>MongoDB</li>
          <li>Vite</li>
          <li>Vercel</li>
          <li>Render.js</li>
          <li>Axios</li>
          <li>Postman</li>
          <li>Tailwind</li>
          <li>Shadcn/ui</li>
        </ul>

        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};

export default Home;
