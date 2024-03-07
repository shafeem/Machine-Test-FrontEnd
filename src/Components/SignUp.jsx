import axios from "../axios/userInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
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

    const validationResult = validater(email, password);

    if (validationResult.isValid) {
      try {
        const response = await axios.post("/signup", { email, password });

        console.log(response);
        console.log(response.status);

        if (response.data.status === 400) {
          Swal.fire({
            icon: "info",
            html: `
              Email already exists! Please try with a different email.`,
            focusConfirm: false,
            confirmButtonText: `
              OK
            `,
          });
        } else if (response.data.status === 500) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        } else {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error occurred during signup:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred while signing up. Please try again later!",
        });
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
        <h2 className="font-serif text-xl mb-2 text-center text-indigo-600">
          Welcome!
          <br /> Let&apos;s begin the great adventure
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
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-sans py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">
            Sign in with GitHub
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 hover:text-blue-700">
              Sign In here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
