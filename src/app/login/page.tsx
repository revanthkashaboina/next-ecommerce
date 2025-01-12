"use client"
import React, { useState } from 'react'

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}

const LoginPage = () => {

  const [mode, setMode] = useState(MODE.LOGIN);

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");


  const formTitle = mode === MODE.LOGIN ? "Log in" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset Your Password" : "Email Verification";
  const buttonTitle = mode === MODE.LOGIN ? "Login" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset Password" : "Verify";


  return (
    <div className='h-[calc(100vh-80px)] px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center'>
      <form className='flex flex-col gap-8'>
        <h1 className='text-2xl font-semibold'>{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>Username</label>
            <input type='text' name='username' placeholder='john' className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        ) : null}

        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>E-mail</label>
            <input type='email' name='email' placeholder='john@gmail.com' className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        ) : (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>Verification Code</label>
            <input type='text' name='emailCode' placeholder='code' className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        )}


        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>Password</label>
            <input type='password' name='password' placeholder='Enter your password' className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        ) : null}
        <button className='bg-cartColor text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed'>{buttonTitle}</button>
      </form>
    </div>
  )
}

export default LoginPage