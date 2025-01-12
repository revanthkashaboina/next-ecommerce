"use client"
import React, { useState } from 'react'
import { useWixClient } from '../hooks/useWixClient';
import { useRouter } from 'next/navigation';
import { LoginState } from '@wix/sdk';
import Cookies from 'js-cookie';

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}

const LoginPage = () => {
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();
  const router = useRouter();

  if (isLoggedIn) router.push('/');

  const [mode, setMode] = useState(MODE.LOGIN);

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // const pathName = usePathname();

  const formTitle = mode === MODE.LOGIN ? "Log in" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset Your Password" : "Email Verification";
  const buttonTitle = mode === MODE.LOGIN ? "Login" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset Password" : "Verify";


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {

      let response;

      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({ email, password });
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({ email, password, profile: { nickname: userName } });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(email, window.location.href);
          setMessage("Password reset email sent successfully!");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({ verificationCode: emailCode });
          break;
        default:
          break;
      }

      console.log(response);

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Logged in successfully!");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken!)
          console.log("tokens=====================", tokens);
          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2
          });
          wixClient.auth.setTokens(tokens);
          router.push("/");
          break

        case LoginState.FAILURE:
          // setError(response.error);
          if (response.errorCode === 'invalidEmail' || response.errorCode === 'invalidPassword') {
            setError('Invalid email or password');
          } else if (response.errorCode === 'emailAlreadyExists') {
            setError('Email already exists');
          } else if (response.errorCode === 'resetPassword') {
            setError('Reset Password');
          } else {
            setError('Something went wrong!');
          }
        // break;

        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your Account is pending approval!");

        default:
          break
      }

    } catch (err) {
      console.log(err);
      setError("Something went wrong!")
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className='h-[calc(100vh-80px)] px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center'>
      <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-semibold'>{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>Username</label>
            <input type='text' name='username' placeholder='john' onChange={(e) => setUsername(e.target.value)} className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        ) : null}

        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>E-mail</label>
            <input type='email' name='email' placeholder='john@gmail.com' onChange={(e) => setEmail(e.target.value)} className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        ) : (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>Verification Code</label>
            <input type='text' name='emailCode' placeholder='code' onChange={(e) => setEmailCode(e.target.value)} className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        )}


        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-700'>Password</label>
            <input type='password' name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} className='ring-2 ring-gray-300 rounded-md p-4' />
          </div>
        ) : null}

        {mode === MODE.LOGIN && <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.RESET_PASSWORD)}>Forgot Password?</div>}

        <button className='bg-cartColor text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed' disabled={isLoading}>{isLoading ? "Loading..." : buttonTitle}</button>

        {error && <div className='text-red-600'>{error}</div>}
        {mode === MODE.LOGIN && (
          <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.REGISTER)}>
            Don't have an account?
          </div>
        )}

        {mode === MODE.REGISTER && (
          <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>
            Have an account? Login
          </div>
        )}

        {mode === MODE.RESET_PASSWORD && (
          <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>
            Go back to login
          </div>
        )}

        {message && <div className='text-green-600 text-sm'>{message}</div>}
      </form>
    </div>
  )
}

export default LoginPage