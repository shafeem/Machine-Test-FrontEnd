// import React from "react";

const SignUp = () => {
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
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-1">
          Login
        </button>

        <div className="border-t border-gray-600 my-4"></div>

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
