import React, { useEffect, useState } from "react";
import { Container } from "../components";
import { useGlobal } from "../context/context";
import { Link } from "react-router-dom";

const Signup = () => {
  const { passwordShown, togglePassword, language, languageToggle } = useGlobal();
  // sign up Validation
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    checkbox: false,
  };
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
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name || values.name < 2) {
      errors.name = "Must contain at least 2 alphabets";
    }
    if (!values.surname || values.surname < 2) {
      errors.surname = "Must contain at least 2 alphabets";
    }
    if (!values.email) {
      errors.email = "Please enter your user name.";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password < 4) {
      errors.password =
        "Your password must contain at least 8 alphanumeric characters";
    }
    if (!values.checkbox) {
      errors.checkbox =
        "You must accept the Membership Agreement and Privacy Policy";
    }
    return errors;
  };

  useEffect(() => {
    document.title = "Sign up";
  }, []);

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
            <form action='' onSubmit={handleSubmit}>
              {/* name */}
              <div className='flex justify-between mb-[15px]'>
                <div className='w-[calc(50%_-_5px)] md:w-[calc(50%_-_15px)]'>
                  <div className=' relative group'>
                    <label
                      htmlFor='name'
                      className={
                        !formErrors.name
                          ? formValues.name
                            ? "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#666]"
                            : "transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]"
                          : "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#eb3b2e]"
                      }>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formValues.name}
                      onChange={handleChange}
                      className={
                        !formErrors.name
                          ? "w-full h-[50px] px-4 text-sm peer focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none"
                          : "w-full h-[50px] px-4 text-sm peer border-[#f00] border text-[#36454d] rounded-sm outline-none bg-[#fff1f1]"
                      }
                    />
                  </div>
                  <p className='text-xs text-[#eb3b2e] font-[8px] pt-1'>
                    {formErrors.name}
                  </p>
                </div>
                <div className='w-[calc(50%_-_5px)] md:w-[calc(50%_-_15px)]'>
                  <div className='relative group'>
                    <label
                      htmlFor='surname'
                      className={
                        !formErrors.surname
                          ? formValues.surname
                            ? "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#666]"
                            : "transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:top-8 peer-valid:top-8 group-focus-within:-translate-y-full peer-valid:-translate-y-full text-[#666]"
                          : "transform transition-all absolute top-8 left-0 h-full flex items-center pl-4 text-[10px] -translate-y-full text-[#eb3b2e]"
                      }>
                      Surname
                    </label>
                    <input
                      type='text'
                      id='surname'
                      name='surname'
                      value={formValues.surname}
                      onChange={handleChange}
                      className={
                        !formErrors.surname
                          ? "w-full h-[50px] px-4 text-sm peer focus:ring focus:border-blue-600 border border-[#ccc] text-[#36454d] rounded-sm outline-none"
                          : "w-full h-[50px] px-4 text-sm peer border-[#f00] border text-[#36454d] rounded-sm outline-none bg-[#fff1f1]"
                      }
                    />
                  </div>
                  <p className='text-xs text-[#eb3b2e] font-[8px] pt-1'>
                    {formErrors.surname}
                  </p>
                </div>
              </div>
              {/* E-mail */}
              <div className='mb-[15px]'>
                <div className='relative group'>
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
              {/* checkboxes */}
              <div className='mb-5 text-sm mdx:text-xs max-w-[365px]'>
                <div className='relative'>
                  <label htmlFor='subscription'>
                    <input
                      value={formValues.checkbox}
                      onChange={handleChange}
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
                <p className='ml-5 text-xs text-[#eb3b2e] font-[8px] pt-1'>
                  {formErrors.checkbox}
                </p>
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
