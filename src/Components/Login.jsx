// import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg p-5 border-4 border-gray-300">
        <h2 className="font-bold text-2xl mb-2 text-center">Sign in</h2>


        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
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

        <div className="mb-4">
          <input className="mr-2 leading-tight" type="checkbox" id="remember" />
          <label className="text-sm text-gray-700" htmlFor="remember">
            Remember password
          </label>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">
          Login
        </button>

        <hr className="my-4" />

        <div className="grid grid-cols-1 gap-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign in with Google
          </button>
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
