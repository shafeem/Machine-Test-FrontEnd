// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Home from "../Components/Home";
import Courses from "../Components/Cource";

const UserRoutes = () => {
  return (
    <>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-course" element={<Courses />} />
          {/* <Route path="/courses" element={<Home />} /> */}

        </Routes>
      </div>
    </>
  );
};

export default UserRoutes;
