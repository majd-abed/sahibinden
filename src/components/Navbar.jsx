import React from "react";
import { data } from "../NavData";
const Navbar = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className='md:hidden sticky bottom-0 grid grid-cols-5 border-t bg-gray-50'>
      {data.map((d) => {
        if (d.id !== 3) {
          return (
            <div
              key={d.id}
              onClick={refreshPage}
              className='hover:bg-gray-200 pb-3 pt-1 duration-300'>
              <div className='flex flex-col items-center pt-1'>
                <img
                  src={d.image}
                  alt=''
                  className='w-[22px] h-[22px] opacity-50 '
                />
                <p className='text-xs text-[#ccc]'>{d.title}</p>
              </div>
            </div>
          );
        }
        return (
          <div
            key={d.id}
            onClick={refreshPage}
            className='hover:bg-gray-200  pb-3 pt-1 duration-300'>
            <div className='flex flex-col items-center pt-1 '>
              <img src={d.image} alt='' className='w-[22px] h-[22px]' />
              <p className='text-xs text-[#1966b9]'>{d.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
