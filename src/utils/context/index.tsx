import React, { createContext, useState } from "react";

export const BookrContext = createContext<{} | null>(null)

export const ContextProvider = ({children}: {children: React.ReactNode} ) => {
    const [state, setState] = useState({});

    return (
        <BookrContext.Provider value={state}>
            {children}
        </BookrContext.Provider>
    )

}