import axios from "../axios/userInstance";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  function validater(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Invalid email format" };
    }

    if (password.length < 5) {
      return {
        isValid: false,
        message: "Password must be at least 5 characters long",
      };
    }
    return { isValid: true };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userValidator = validater(email, password);
    if (userValidator.isValid) {
      try {
        await axios({
          url: "/login",
          method: "POST",
          data: {
            email,
            password,
          },
        }).then((res) => {
          console.log(res);
          if (res.data.status == 400) {
            Swal.fire({
              icon: "error",
              title: `${res.data.message}`,
            });
          } else if (res.data.status == 500) {
            Swal.fire({
              icon: "error",
              title: `Server Error! Try again later.`,
            });
          } else {
            navigate("/home");
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error Fill Out Properly",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg p-5 border-4 border-gray-300">
        <h2 className="font-serif text-xl  mb-2 text-center text-indigo-600">
          Sign In
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-1"
        >
          Login
        </button>

        <div className="border-t border-gray-600 my-4"></div>

        <div className="grid grid-cols-1 gap-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-sans py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign in with Google
          </button>


          <button className="bg-blue-800 hover:bg-blue-900  text-white font-sans py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">
            Sign in with GitHub
          </button>
          <p className="text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/Sign-up" className="text-blue-500 hover:text-blue-700">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
