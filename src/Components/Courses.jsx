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
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="pt-5 ">
              <h1 className="text-lg font-serif pl-10">Courses</h1>
              {data?.map((course, index) => (
                <div
                  key={index}
                  className="p-5 flex justify-between items-center h-14 bg-slate-400 rounded-lg m-3"
                >
                  <h2 className=" text-xl text-slate-900 font-serif">
                    {course.title}
                  </h2>
                  <div>
                    {" "}
                    <button
                      onClick={() => navigate(`/courses/${course._id}`)}
                      className="bg-blue-500 hover:bg-blue-700 text-slate-100 font-bold py-2 px-4 rounded"
                    >
                      View Course
                    </button>
                    {!course?.chapter?.length && (
                      <button
                        onClick={() =>
                          navigate(`/create-chapter/${course._id}`)
                        }
                        className="bg-gray-500 pl-3 hover:bg-gray-700 text-slate-100 font-bold py-2 px-4 rounded"
                      >
                        Add Chapters
                      </button>
                      
                    )}
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

    </>
  );
};

export default Courses;
