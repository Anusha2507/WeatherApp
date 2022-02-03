import React, { createContext, useState } from "react";

const Inputcontext = createContext({
  name: "",
  addInput: () => {},
});

const ContextApi = (props) => {
  const [input, setInput] = useState("Mumbai");
  const addInput = (input) => {
    setInput(input);
  };
  const context = {
    name: input,
    addInput,
  };
  
  return (
    <>
      <Inputcontext.Provider value={context}>
        {props.children}
      </Inputcontext.Provider>
    </>
  );
};
export default Inputcontext;
export { ContextApi };