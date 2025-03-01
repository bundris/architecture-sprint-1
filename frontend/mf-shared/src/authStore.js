import { createContext, useState, useContext } from "react";

export const CurrentUserContext = createContext({});

export const AuthProvider = ({ children, ctx }) => {

    return (
        <CurrentUserContext.Provider value={ ctx }>
            {children}
        </CurrentUserContext.Provider>
    );
};

export const useAuth = () => {
    try {
        return useContext(CurrentUserContext);
    } catch(e) {
        return {};
    }
}