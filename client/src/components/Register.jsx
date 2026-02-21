import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

  const {
      register,
      formState: { errors, isSubmitting },
      handleSubmit,
    } = useForm({mode:'all'});


  
    const submit = (data) => {
     console.log(data);
     
    };


  return (
    <div className=" bg-[#060c22] min-h-screen text-white flex items-center justify-between ">
      <div className="border border-red-300 m-auto flex flex-col px-6 py-10  justify-center items-center rounded-2xl shadow-2xl shadow-pink-400 ">
        <h1 className="text-4xl font-semibold mb-10">Register</h1>

        <form onSubmit={handleSubmit(submit)}>
          {/* Name */}
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-2xl mb-2">
              Username
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name is too short..!",
                },
              })}
              className="bg-linear-to-r from-blue-600 via-pink-200 to-pink-700 p-2 rounded-2xl text-xl border-0 outline-0 text-black font-semibold focus:outline-2 outline-offset-4 outline-white"
            />
            <p className="text-red-400 text-sm mt-2 text-center">
              {errors?.name?.message}
            </p>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-2xl mb-2">
              User Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is require",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
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
          <div className="flex flex-col mt-2">
            <label htmlFor="password" className="text-2xl mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message:"Must contain 8+ chars, upper, lower, number & special char",
                },
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
            className="bg-linear-to-r mt-8 from-red-600 via-pink-200 to-green-700 w-full p-2 rounded-2xl text-xl border-0 outline-0 text-black font-semibold mb-4"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-10">
          <div className="w-full text-xl border-0 outline-4 outline-offset-2 outline-gray-600 rounded-2xl px-6 py-2 mb-6">
            <button>SingUp with Facebook</button>
          </div>
          <div className="w-full text-xl border-0 outline-4 outline-offset-2 outline-gray-600 rounded-2xl px-6 py-2 ">
            <button>SingUp with Twitter</button>
          </div>
        </div>

        <p className="mt-10 ">
          already have an account..?{" "}
          <Link to="/login" className="text-green-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register