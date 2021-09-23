import React, { useState, createContext } from "react";

export const UserContext = createContext()

export const UserProvider = () => {
    const [authenticatedUser, setAuthenticatedUser] = useState()
    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            
        </UserContext.Provider>
    )
}
