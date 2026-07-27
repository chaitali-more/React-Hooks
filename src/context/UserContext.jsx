import { createContext, useContext } from "react";

export const userContext = createContext(null);
// Capitalized alias for JSX component tag in React 19
const UserContextComponent = userContext;

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
    // React 19: Render <UserContextComponent> directly as a Provider (capitalized JSX tag required)
    <UserContextComponent value={userDetails}>
        {children}
    </UserContextComponent>
  );
};


