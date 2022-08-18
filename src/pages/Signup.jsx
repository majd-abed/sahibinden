import React, { useEffect, useState } from "react";
import { Container } from "../components";
import { useGlobal } from "../context/context";
import { Link } from "react-router-dom";

const Signup = () => {
  const { passwordShown, togglePassword, language, languageToggle } = useGlobal();
  useEffect(() => {
    document.title = "Sign up"
  }, [])
  return (
    <div className='bg-gray-50 pb-[30px] mdx:min-h-[calc(100vh_-_59px)]'>
      {/* Top Bar */}
      <div className='md:hidden bg-[#32628d] flex justify-between px-2 text-white font-bold py-4'>
        <img
          src={require("../images/back.png")}
          alt=''
          className='w-[20px] h-[22px] cursor-pointer'
          onClick={() => window.history.go(-1)}
        />
        <p>Sign up</p>
        <div className='hover:underline cursor-pointer' onClick={languageToggle}>
          {language}
        </div>
      </div>
      <Container>
        {/* Login interface */}
        <div className='flex items-center flex-col pt-5'>
          <div className='md:w-[442px] md:bg-white md:border rounded-[3px] md:p-[50px] mdx:px-5'>
            <h1 className='mdx:hidden text-[22px] font-bold mb-5 text-[#3d3d3d]'>
              Sign up
            </h1>
            {/* Login form */}
            <form action=''>
              {/* name */}
              <div className='flex justify-between mb-[15px]'>
                <div className='w-[calc(50%_-_5px)] md:w-[calc(50%_-_15px)]'>
                  <div className=' relative group'>
                    <input
                      type='text'
                      id='name'
                      required
                      className='peer h-[50px] mdx:w-full text-sm pl-2 focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none'
                    />
                    <label
                      htmlFor='name'
                      className='transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]'>
                      Name
                    </label>
                  </div>
                </div>
                <div className='w-[calc(50%_-_5px)] md:w-[calc(50%_-_15px)]'>
                  <div className='relative group'>
                    <input
                      type='text'
                      id='surname'
                      required
                      className='peer h-[50px] w-full text-sm pl-2 focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none'
                    />
                    <label
                      htmlFor='surname'
                      className='transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]'>
                      Surname
                    </label>
                  </div>
                </div>
              </div>
              {/* E-mail */}
              <div className='mb-[15px]'>
                <div className='relative group'>
                  <input
                    type='text'
                    id='username'
                    required
                    className='peer w-full h-[50px] px-4 text-sm focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none'
                  />
                  <label
                    htmlFor='username'
                    className='transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]'>
                    E-mail
                  </label>
                  <div className='info absolute right-4 top-4 cursor-pointer'>
                    <img
                      src={require("../images/info.png")}
                      alt=''
                      width={18}
                      height={18}
                      className='w-[18px] h-[18px] '
                    />
                    <div className='arrow-info hidden absolute bg-white text-[#333] border border-[#dedede] rounded-md z-10 text-sm right-[-13px] top-7'>
                      <p className='w-64 p-3'>
                        Please make sure your e-mail address is correct. We will send
                        all e-mails to that e-mail address.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* password */}
              <div className='mb-[15px]'>
                <div className='relative group'>
                  <input
                    type={passwordShown ? "text" : "password"}
                    id='password'
                    required
                    className='peer w-full h-[50px] px-4 text-sm focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none'
                  />
                  <label
                    htmlFor='username'
                    className='transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]'>
                    Password
                  </label>
                  <div
                    className='absolute right-4 top-4 cursor-pointer'
                    onClick={togglePassword}>
                    <img
                      src={require("../images/password_hide.png")}
                      alt=''
                      width={21}
                      height={18}
                      className='w-[21px] h-[18px] '
                    />
                  </div>
                </div>
              </div>
              {/* checkboxes */}
              <div className='mb-5 text-sm mdx:text-xs max-w-[365px]'>
                <div className='relative'>
                  <label htmlFor='subscription'>
                    <input
                      required
                      className='absolute rounded-none border outline-none top-[4px]'
                      type='checkbox'
                      id='subscription'
                      name='subscription'
                    />
                    <span className='ml-5 block'>
                      I accept the{" "}
                      <a href='#' className='hover:underline text-[#438ed8]'>
                        Subscription Agreement and its annexes.
                      </a>
                    </span>
                  </label>
                </div>
                <div className='relative'>
                  <label htmlFor='commercial'>
                    <input
                      className='absolute rounded-none border outline-none top-[4px]'
                      type='checkbox'
                      id='commercial'
                      name='commercial'
                    />
                    <span className='ml-5 block'>
                      I allow commercial electronic messages to be sent to my contact
                      information relating to campaign, promotional and advertising
                      content, process my personal data for this purpose and share
                      with your suppliers.
                    </span>
                  </label>
                </div>
              </div>
              {/* sign in button */}
              <div className='flex justify-center px-[23px] mb-[30px]'>
                <button className='bg-[#489ae9] w-full h-[44px] font-semibold shadow-sm shadow-gray-500 rounded-sm text-white hover:bg-[#4594de]'>
                  Sign up
                </button>
              </div>
              {/* Login button */}
              <div className='flex justify-center px-[23px] mb-[50px]  text-sm'>
                <span className='pr-1'>Do you have an account?</span>
                <Link
                  to={"/login"}
                  className='text-[#438ed8] hover:underline  relative'>
                  Login
                  <span className='absolute text-[#438ed8] text-2xl right-[-10px] -top-2'>
                    &#129170;
                  </span>
                </Link>
              </div>
              {/* captcha */}
              <div className='text-[10px] text-[#999]  mb-3'>
                <p>
                  The personal data on this page collected for the sole purpose of
                  your membership activation. You can access our privacy policy{" "}
                  <a href='#' className='text-black hover:underline'>
                    here.
                  </a>
                </p>
              </div>
              <div className='text-[10px] text-[#999]'>
                <p>
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href='https://policies.google.com/privacy'
                    className='text-black'>
                    Privacy Policy{" "}
                  </a>
                  and{" "}
                  <a href='https://policies.google.com/terms' className='text-black'>
                    Terms of Service{" "}
                  </a>
                  apply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
