/* eslint-disable react/prop-types */

import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/axios";

export const AuthContext = createContext({})



    

export function AuthProvider({ children }){
    const isAuthenticated = false

    async function signIn(data){
        const {} = await api.get({
            
        })
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
       </AuthContext.Provider>
    )
}