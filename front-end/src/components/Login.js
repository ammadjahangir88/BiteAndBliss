import React, { useState } from "react";
import img from "../assets/login-image.jpg";
import axiosInstance from "../utils/Axios";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const userData = {
    email: email,
    password: password
  };
  console.log(`${process.env.REACT_APP_BACK_END_API_URL}`)
  const {login}=useAuth()
  function loginUser(e){
    e.preventDefault();
    console.log(`${process.env.REACT_APP_BACK_END_API_URL}`)


    axiosInstance.post('/sign-in',userData).then((response)=>{
      console.log(response.status, response.data.token);
      console.log(response.data)
      if (response.data.success)
      {
        const token = response.data.token;
        // Save the token to the context
        login(token);
        navigate('/dashboard');
      }
      // setErrorMessage(response.data.message)
      // setError(true)

     
    })

  }
  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${img})` }}>
        <div className="text-center p-5 bg-gray-900 bg-opacity-50">
          <h2 className="text-4xl font-bold text-white mb-2">BiteAndBliss</h2>
          <p className="text-white max-w-md mx-auto">Enjoy the finest dining experience with us.</p>
        </div>
      </div>

      {/* Login Form Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-lg rounded-lg">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to BiteAndBliss</h1>
          <form className="mt-8 space-y-6" onSubmit={loginUser}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div> 

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>  
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
             >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
