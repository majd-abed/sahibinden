import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
      <div className='bg-slate-50 pt-[30px] md:pt-[12px] flex justify-center mdx:hidden'>
        <a className='header-logo' href='#' title='Back to sahibinden.com homepage'>
          sahibinden.com
        </a>
      </div>
    </>
  );
};

export default Header;
