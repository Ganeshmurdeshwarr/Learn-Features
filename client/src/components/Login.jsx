import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const submit = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    console.log(Object.fromEntries(formData));
  };

  return (
    <div className=" bg-[#060c22] min-h-screen text-white flex items-center justify-between ">
      <div className="border border-red-300 m-auto flex flex-col px-6 py-10  justify-center items-center rounded-2xl shadow-2xl shadow-pink-400 ">
        <h1 className="text-4xl font-semibold mb-10">Login</h1>

        <form onSubmit={handleSubmit(submit)}>
          {/* Name */}
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-2xl mb-2">
              User Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="bg-linear-to-r from-blue-600 via-pink-200 to-pink-700 p-2 rounded-2xl text-xl border-0 outline-0 text-black font-semibold focus:outline-2 outline-offset-4 outline-white"
            />
            <p className="text-red-400 text-sm mt-2 text-center">
              {errors?.email?.message}
            </p>
          </div>

          {/* Password  */}
          <div className="flex flex-col mt-6">
            <label htmlFor="password" className="text-2xl mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="bg-linear-to-r from-blue-600 via-pink-200 to-pink-700 p-2 rounded-2xl text-xl border-0 outline-0 text-black font-semibold focus:outline-2 outline-offset-4 outline-white"
            />
            <p className="text-red-400 text-sm mt-2 text-center">
              {errors?.password?.message}
            </p>
          </div>

          {/* Button */}

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-linear-to-r mt-8 from-blue-600 via-pink-200 to-pink-700 w-full p-2 rounded-2xl text-xl border-0 outline-0 text-black font-semibold mb-4"
          >
            Sing In
          </button>
        </form>

        <h1>
          Forgot Password?{" "}
          <span className="text-green-300/40">
            <a href="#">Click Here</a>
          </span>
        </h1>

        <div className="mt-10">
          <div className="w-full text-xl border-0 outline-4 outline-offset-2 outline-gray-600 rounded-2xl px-6 py-2 mb-6">
            <button>SingIn with Facebook</button>
          </div>
          <div className="w-full text-xl border-0 outline-4 outline-offset-2 outline-gray-600 rounded-2xl px-6 py-2 ">
            <button>SingIn with Twitter</button>
          </div>
        </div>
        <p className="mt-10 ">
          Don't have an account..?{" "}
          <Link to="/register" className="text-green-400 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
