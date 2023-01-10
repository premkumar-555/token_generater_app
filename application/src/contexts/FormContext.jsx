import React, { useState, createContext, useContext } from "react";

const Context = createContext();
const FormContext = ({ children }) => {
  const [formvalues, setformvalues] = useState({});
  const [tokenData, settokenData] = useState({});
  return (
    <Context.Provider
      value={{ formvalues, setformvalues, tokenData, settokenData }}
    >
      {children}
    </Context.Provider>
  );
};

export const getContextValues = () => {
  const { formvalues, setformvalues, tokenData, settokenData } =
    useContext(Context);
  return { formvalues, setformvalues, tokenData, settokenData };
};

export default FormContext;
