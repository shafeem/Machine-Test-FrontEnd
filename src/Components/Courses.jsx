import { useEffect, useState } from "react";
import axios from "../axios/userInstance";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      axios({
        url: "/get-courses",
        method: "GET",
      }).then((res) => {
        console.log(res, ";;;;;;;;;;;;");
        if (res?.data?.status) {
          setData(res?.data?.courses);
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  console.log(data, ";;;;;;;;;;;;;sssss");

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="pt-10 flex justify-between">
          <h1 className="text-xl font-serif pl-4">Courses</h1>
          {/* Add any content you want to display at the top right */}
        </div>
        <div className="pt-5 flex flex-wrap justify-center">
          {data?.map((course) => (
            <div
              key={course?._id}
              className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"
            >
              <div className="p-4">
                <h2 className="text-xl uppercase font-semibold text-gray-900 dark:text-white mb-2">
                  {course?.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {course?.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded px-2.5 py-0.5">
                    {course?.category}
                  </span>
                  <a
                    href={`/courses/${course?._id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Details
                  </a>
                </div>
                <div className="pt-3">
                  {course?.chapter && (
                    <div>
                      <div className="flex justify-between items-center">
                        <h1 className=" text-gray-700 dark:text-gray-300 font-sans font-bold text-mg mb-4">
                         
                          - Chapters
                        </h1>
                        <button 
                        onClick={() => navigate(`/create-chapter/${course._id}`)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Chapter</button>
                      </div>
                      <ul className="list-disc pl-8">
                        {course?.chapter?.map((chapter) => (
                          <li
                            key={chapter?._id}
                            onClick={() => navigate(`/chapter-details/${chapter?._id}`)}
                            className="text-blue-700 dark:text-gray-300 text-sm mb-4 hover:cursor-pointer"
                          >
                            {chapter?.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
