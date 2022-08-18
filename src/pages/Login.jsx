import React, { useState, useEffect } from "react";
import { Container, Timer } from "../components";
import QrCode from "../components/QrCode";
import { useGlobal } from "../context/context";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    qrToggle,
    passwordShown,
    togglePassword,
    minutes,
    seconds,
    language,
    languageToggle,
  } = useGlobal();
  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    document.title = "sahibinden.com user login";
  }, []);
  // Login Validation
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please enter your user name.";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password < 4) {
      errors.password = "password must be more that 4 characters ";
    }
    return errors;
  };
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
        <p>Login</p>
        <div className='hover:underline cursor-pointer' onClick={languageToggle}>
          {language}
        </div>
      </div>
      <Container>
        <div className='flex items-center flex-col'>
          {/*Warning */}
          <div className='md:w-[442px] mdx:mx-5 border border-[#eddfb7] bg-[#fff7e0] rounded-[4px] p-3 mt-5 mdx:text-sm'>
            <div className='flex'>
              <img
                src={require("../images/denial_warning.png")}
                alt=''
                width={24}
                height={24}
                className='mr-5 mdx:mr-1 w-6 h-6'
              />
              <p className='font-semibold text-base text-[#bd6b26]'>
                You are trying to access from outside of Turkey.
              </p>
            </div>
            <p className='text-sm text-[#666] mt-[2px]'>
              Please sign in to access sahibinden.com. Sign up for free if you do not
              have an account.
            </p>
            <p className='text-sm text-[#666] mt-[2px]'>
              If you think you should not see this,
              <a href='#' className='text-[#039]'>
                please inform us.
              </a>
            </p>
          </div>
        </div>
        {/* Login interface */}
        <div className='flex items-center flex-col pt-5 mdx:px-5'>
          <div className='md:w-[442px] md:bg-white md:border rounded-[3px] md:p-[50px] mdx:w-full'>
            <div className='flex justify-between mb-3'>
              <h1 className='text-[22px] font-semibold mdx:hidden'>
                {qrToggle ? "Login with QR Code" : "Login"}
              </h1>
              <div className='mdx:hidden'>
                <QrCode />
              </div>
            </div>
            {/* Login form */}
            <form
              action=''
              onSubmit={handleSubmit}
              style={{ display: qrToggle ? "none" : "block" }}>
              {/* E-mail */}
              <div className='mb-[15px]'>
                <div className=' relative group'>
                  <label
                    htmlFor='email'
                    className={
                      !formErrors.email
                        ? formValues.email
                          ? "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#666]"
                          : "transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]"
                        : "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#eb3b2e]"
                    }>
                    E-mail
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                    className={
                      !formErrors.email
                        ? "w-full h-[50px] px-4 text-sm peer focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none"
                        : "w-full h-[50px] px-4 text-sm peer border-[#f00] border text-[#36454d] rounded-sm outline-none bg-[#fff1f1]"
                    }
                  />
                </div>
                <p className='text-xs text-[#eb3b2e] font-[8px] pt-1'>
                  {formErrors.email}
                </p>
              </div>
              {/* password */}
              <div className='mb-[15px]'>
                <div className='relative group'>
                  <label
                    htmlFor='password'
                    className={
                      !formErrors.password
                        ? formValues.password
                          ? "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#666]"
                          : "transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]"
                        : "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#eb3b2e]"
                    }>
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    id='password'
                    name='password'
                    value={formValues.password}
                    onChange={handleChange}
                    className={
                      !formErrors.password
                        ? "w-full h-[50px] px-4 text-sm peer focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none"
                        : "w-full h-[50px] px-4 text-sm peer border-[#f00] border text-[#36454d] rounded-sm outline-none bg-[#fff1f1]"
                    }
                  />
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
                <p className='text-xs text-[#eb3b2e] font-[8px] pt-1'>
                  {formErrors.password}
                </p>
              </div>
              {/* password options */}
              <div className='flex justify-between mb-[15px]'>
                <div className='flex items-center relative'>
                  <label className='' htmlFor='remember'>
                    <input
                      className='absolute mr-2 rounded-none border outline-none top-[6px]'
                      type='checkbox'
                      id='remember'
                      name='remember'
                    />
                    <span className='text-xs ml-5'>Keep me logged in</span>
                  </label>
                </div>
                <div>
                  <a href='#' className='hover:underline text-[#438ed8] text-xs'>
                    Forgot Password
                  </a>
                </div>
              </div>
              {/* sign in button */}
              <div className='flex justify-center px-[23px] mb-[30px]'>
                <button className='bg-[#489ae9] w-full h-[44px] font-semibold shadow-sm shadow-gray-500 rounded-sm text-white hover:bg-[#4594de]'>
                  Sign in
                </button>
              </div>
              <div className='flex justify-center px-[23px] mb-[50px]  text-sm'>
                <span className='pr-1'>Not a member yet?</span>
                <Link
                  to={"/signup"}
                  className='text-[#438ed8] hover:underline relative'>
                  Sign up
                  <span className='absolute text-[#438ed8] text-2xl right-[-10px] -top-2'>
                    &#129170;
                  </span>
                </Link>
              </div>
              {/* captcha */}
              <div className='text-[10px] text-[#999]'>
                <p className='captcha-disclaimer'>
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
            {/* QR Code Login */}
            <div style={{ display: !qrToggle ? "none" : "block" }}>
              <div className='relative mb-5'>
                <div className='flex justify-center items-center'>
                  {minutes + seconds > 0 ? (
                    <img
                      className='w-[110px] h-[110px]'
                      src={require("../images/index.png")}
                      alt='QR Code'
                      w={110}
                      h={110}
                    />
                  ) : (
                    <img
                      onClick={refreshPage}
                      className='w-[110px] h-[110px] cursor-pointer'
                      src={require("../images/timeout.png")}
                      alt='QR Code'
                      w={110}
                      h={110}
                    />
                  )}
                </div>
                {/* Timer */}
                <div
                  className={
                    minutes + seconds === 0
                      ? `absolute arrow bg-[#c95b50] w-24 text-xs text-white text-center p-1.5 rounded-[3px] top-8 right-0 after:content-[''] after:absolute after:top-[28%] after:left-[-14px] after:ml-[-5px] after:border-[10px] after:border-solid after:border-transparent after:border-r-[#c95b50]`
                      : `absolute arrow bg-[#718598] w-24 text-xs text-white text-center p-1.5 rounded-[3px] top-8 right-0 after:content-[''] after:absolute after:top-[28%] after:left-[-14px] after:ml-[-5px] after:border-[10px] after:border-solid after:border-transparent after:border-r-[#718598]`
                  }>
                  <p>Remaining time</p>
                  <strong className='font-bold'>
                    <Timer />
                  </strong>
                </div>
              </div>
              <div className='border-t border-b mt-5 pt-5 '>
                <ul className='text-[#3d3d3d]'>
                  <li className='flex pb-[10px]'>
                    <span className='bg-[#718598] text-white font-bold  px-[7.8px] rounded-full mr-3 h-min'>
                      1
                    </span>
                    <p className='text-sm'>
                      Log in to sahibinden.com{" "}
                      <span className='font-bold'>Android</span> or{" "}
                      <span className='font-bold'>iOS</span> mobile app.
                    </p>
                  </li>
                  <li className='flex pb-[10px]'>
                    <span className='bg-[#718598] text-white font-bold  px-[7.8px] rounded-full mr-3 h-min'>
                      2
                    </span>
                    <p className='text-sm'>
                      Open the “
                      <span className='font-bold'>
                        Login to the Web with QR Code” screen in the
                      </span>{" "}
                      “My Account” menu under “Private for Me”.
                    </p>
                  </li>
                  <li className='flex pb-[10px]'>
                    <span className='bg-[#718598] text-white font-bold  px-[7.8px] rounded-full mr-3 h-min'>
                      3
                    </span>
                    <p className='text-sm'>Scan the QR code on the screen.</p>
                  </li>
                </ul>
              </div>
              <div className='flex justify-center mt-[30px] mb-[-13px] text-sm '>
                <span className='pr-1'>Not a member yet?</span>
                <Link
                  to={"/Signup"}
                  className='text-[#438ed8] hover:underline relative'>
                  Sign up
                  <span className='absolute text-[#438ed8] text-2xl right-[-10px] -top-2'>
                    &#129170;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
