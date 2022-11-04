import { createContext, useState } from "react";

const PositionContext = createContext({});

export const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState(1);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      {children}
    </PositionContext.Provider>
  );
};

export default PositionContext;
