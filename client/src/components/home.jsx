import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      <div className="flex h-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-8xl font-semibold m-6">Rover&Out</h1>
          <Button className="m-7" onClick={handleClick}>
            Login
          </Button>
        </div>
        <p className="text-2xl ml-7 mt-10">List of technologies and libraries:</p>
        <ul className="ml-7 mt-3">
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
      </div>
    </>
  );
};

export default Home;
