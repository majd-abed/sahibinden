import React, { useState } from "react";
import { useGlobal } from "../context/context";
import Container from "./Container";

const Footer = () => {
  const { language, setLanguage } = useGlobal();
  const [dropDownShow, setdropDownShow] = useState(false);
  const changeLanguage = () => {
    if (language === "EN") setLanguage("TR");
    else setLanguage("EN");
    setdropDownShow(!dropDownShow);
  };
  const toggleDropDown = () => {
    setdropDownShow(!dropDownShow);
  };
  return (
    <div className='bg-gray-50 border-t pt-[30px] text-sm font-semibold pb-10 mdx:hidden'>
      <Container>
        <div className='mx-28'>
          {/* contact menu */}
          <div className='flex justify-between pb-2 lgx:flex-col lgx:gap-y-4'>
            {/* call center */}
            <ul className='flex'>
              <li className='flex mr-5'>
                <div className='mx-2'>
                  <img
                    src={require("../images/footer_call.png")}
                    alt='footer call'
                    width={42}
                    height={42}
                    className='min-h-[42px] min-w-[42px]'
                  />
                </div>
                <div>
                  <p className='text-[#c55353]'>24/7 Customer Services</p>
                  <span>0 850 222 44 44</span>
                </div>
              </li>
              {/* help center */}
              <li className='flex'>
                <div className='mx-2'>
                  <img
                    src={require("../images/footer_q.png")}
                    alt='footer question'
                    width={42}
                    height={42}
                    className='min-h-[42px] min-w-[42px]'
                  />
                </div>
                <div>
                  <p className='text-[#c55353]'>Help Center</p>
                  <a
                    href='https://yardim.sahibinden.com/hc/tr'
                    title='yardim.sahibinden.com'>
                    yardim.sahibinden.com
                  </a>
                </div>
              </li>
            </ul>
            <div className='flex'>
              {/* Language Selection */}
              <div
                className='bg-white border px-2 py-1 relative w-64 cursor-pointer max-h-[50px]'
                onClick={toggleDropDown}>
                <div className=''>
                  <div className='text-[10px] text-[#666] mx-2'>
                    Dil Seçimi (Language)
                  </div>
                  <div>
                    {language === "EN" ? (
                      <div className='flex'>
                        <div className='mx-2 flex justify-center items-center'>
                          <img
                            className='w-6 h-4'
                            src={require("../images/en.png")}
                            alt='EN'
                            w={24}
                            h={16}
                          />
                        </div>
                        <p>İngilizce (English)</p>
                      </div>
                    ) : (
                      <div className='flex'>
                        <div className='mx-2 flex justify-center items-center'>
                          <img
                            className='w-6 h-4'
                            src={require("../images/tr.png")}
                            alt='TR'
                            w={24}
                            h={16}
                          />
                        </div>
                        <p>Türkçe (Turkish)</p>
                      </div>
                    )}
                  </div>
                </div>
                {/* dropdown sign */}
                <div className='absolute top-4 right-4 '>
                  <img
                    className='w-6 h-6'
                    src={require("../images/drop.png")}
                    alt='TR'
                    w={24}
                    h={24}
                    style={{ transform: dropDownShow ? "rotate(180deg)" : "" }}
                  />
                </div>
                {/* language list */}
                <div
                  className='absolute bg-white border p-2 w-64 top-[60px] right-0 rounded-sm hover:bg-[#edf4fc]'
                  onClick={changeLanguage}
                  style={{ display: dropDownShow ? "block" : "none" }}>
                  {language !== "EN" ? (
                    <div className='flex'>
                      <div className='mx-2 flex justify-center items-center'>
                        <img
                          className='w-6 h-4'
                          src={require("../images/en.png")}
                          alt='EN'
                          w={24}
                          h={16}
                        />
                      </div>
                      <p>İngilizce (English)</p>
                    </div>
                  ) : (
                    <div className='flex'>
                      <div className='mx-2 flex justify-center items-center'>
                        <img
                          className='w-6 h-4'
                          src={require("../images/tr.png")}
                          alt='TR'
                          w={24}
                          h={16}
                        />
                      </div>
                      <p>Türkçe (Turkish)</p>
                    </div>
                  )}
                </div>
              </div>
              {/* security sign */}
              <div>
                <div className='mr-10 ml-5'>
                  <a
                    target='_blank'
                    href='https://www.guvendamgasi.org.tr/firmadetay.php?Guid=25680f1d-270b-11ea-991b-48df373f4850'>
                    <img
                      src={require("../images/group.png")}
                      alt='security'
                      width={42}
                      height={42}
                      className='min-h-[42px] min-w-[42px]'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='ml-2'>
              <p className='text-[11px] text-[#888] bg-white border border-dashed border-[#ccc] p-2 my-2'>
                The ad creator is solely responsible for the content, correctness,
                accuracy and legal obligation of all posted ads, entries, ideas and
                information. sahibinden.com is not in any way responsible for the
                quality or legality of content created and posted by its users. You
                should contact the ad creator directly with your questions. Location
                Provider Document No: 581
              </p>
              <div className='text-[#555] text-[11px] '>
                Copyright © 2000-2022 sahibinden.com
              </div>
            </div>
            <div>
              <img
                src={require("../images/qr.jpg")}
                alt='QR code'
                width={80}
                height={93}
                className='min-h-[93px] min-w-[80px] mx-5 pt-2'
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
