import { createContext,useContext } from "react";

export const userContext = createContext(null);

// custom hook
export const useUserDetails = () => {
    const userContext1 = useContext(userContext);
    if(!userContext1){
        throw new Error("useUserDetails must be inside UserContextProvider")
    }
    return userContext1;
}

export const UserContextProvider  = ({ children, userDetails }) => {
  return (
    <userContext.Provider value={userDetails}>
        {children}
    </userContext.Provider>
  );
};
