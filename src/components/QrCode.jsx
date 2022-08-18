import React from "react";
import { useGlobal } from "../context/context";

const QrCode = () => {
  const { qrToggle, setQrToggle, setMinutes, setSeconds } = useGlobal();
  const qrTrigger = () => {
    setQrToggle(!qrToggle);
    setSeconds(0);
    setMinutes(3);
  };
  return (
    <div onClick={qrTrigger} className='cursor-pointer'>
      {qrToggle ? (
        <div className='rounded-sm'>
          <img
            src={require("../images/qr-login-desktop.png")}
            alt=''
            width={40}
            height={40}
          />
        </div>
      ) : (
        <div className='rounded-sm'>
          <img
            src={require("../images/qr-login.png")}
            alt=''
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
};

export default QrCode;
