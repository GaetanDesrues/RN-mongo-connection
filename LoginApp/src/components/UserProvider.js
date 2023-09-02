import React, {createContext, useState, useContext} from 'react';

// Create a context for the user data
const UserContext = createContext();

// UserProvider component
export const UserProvider = ({children}) => {
  // Define the user state and functions to update it
  const [user, setUser] = useState(null);

  // Function to set the user data
  const login = userData => {
    setUser(userData);
  };

  // Function to log the user out
  const logout = () => {
    setUser(null);
  };

  // Create a context value containing user data and functions
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
