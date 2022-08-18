import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();
const ContextProvider = ({ children }) => {
  const [qrToggle, setQrToggle] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(3);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const languageToggle = () => {
    if (language === "EN") setLanguage("TR");
    else setLanguage("EN");
  };
  return (
    <GlobalContext.Provider
      value={{
        qrToggle,
        setQrToggle,
        language,
        setLanguage,
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        passwordShown,
        setPasswordShown,
        togglePassword,
        languageToggle,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
export function useGlobal() {
  return useContext(GlobalContext);
}
export { ContextProvider, GlobalContext };
