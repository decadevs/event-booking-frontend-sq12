import React, { createContext, useState } from "react";

const BookrContext = createContext<{} | null>(null)

export const BookrProvider = ({children}: {children: React.ReactNode} ) => {
    const [state, setState] = useState({});

    return (
        <BookrContext.Provider value={state}>
            {children}
        </BookrContext.Provider>
    )

}