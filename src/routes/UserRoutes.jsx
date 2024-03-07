// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

const UserRoutes = () => {
  return (
    <>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default UserRoutes;
