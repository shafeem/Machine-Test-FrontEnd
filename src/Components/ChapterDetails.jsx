// import React from 'react'
import images from "../images/coursecreation.jpg";
import { useEffect, useState } from "react";
import axios from "../axios/userInstance";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreateChapter = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          url: "chapter-details",
          method: "POST",
          data: {
            id,
          },
        }).then((res) => {
            console.log(res?.data?.chapter);
          setTitle(res?.data?.chapter?.title);
          setDescription(res?.data?.chapter?.description);
         
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array indicates that this effect should run only once when the component mounts

  return (
    <>
      <div className=" w-screen h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="flex justify-center items-center  pt-5">
          <div className="w-screen xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: ` url(${images})`,
              }}
            />
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center text-indigo-600 font-serif">
                Chapter Details
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"


>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold font-serif text-gray-700"
                      htmlFor="firstName"
                    >
                      Title
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-serif"
                      id="firstName"
                      type="text"
                      required
                      value={title}
                      
                      placeholder="Course Title"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 font-serif text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Description
                  </label>
                  <input
                    className="w-full px-3 font-serif py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    value={description}
                    placeholder="Chapter Discription"
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 font-serif focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={() => navigate("/courses")}
                  >
                    Go Back To Courses
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChapter;
