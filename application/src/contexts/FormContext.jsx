import React, { useState, createContext, useContext } from "react";

const Context = createContext();
const FormContext = ({ children }) => {
  const [formvalues, setformvalues] = useState({});
  return (
    <Context.Provider value={{ formvalues, setformvalues }}>
      {children}
    </Context.Provider>
  );
};

export const getContextValues = () => {
  const { formvalues, setformvalues } = useContext(Context);
  return { formvalues, setformvalues };
};

export default FormContext;
