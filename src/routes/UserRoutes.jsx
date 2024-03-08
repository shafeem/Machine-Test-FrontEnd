// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Home from "../Components/Home";
import CreateCourses from "../Components/CreateCource";
import Courses from "../Components/Courses";
import CourseDetails from "../Components/CourseDetails";
import CreateChapter from "../Components/CreateChapter";
import ChapterDetails from '../Components/ChapterDetails'

const UserRoutes = () => {
  return (
    <>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-course" element={<CreateCourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/create-chapter/:id" element={<CreateChapter />} />
          <Route path="/chapter-details/:id" element={<ChapterDetails />} />

        </Routes>
      </div>
    </>
  );
};

export default UserRoutes;
