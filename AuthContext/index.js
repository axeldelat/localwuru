// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            const token = localStorage.getItem("token");

            if (token) {
                setIsAuthenticated(true);
            }
            setIsLoading(false);
        }
    });
    const logOut = ()=>{
      localStorage.removeItem('token')
      setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading,logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;
