import React, { createContext } from 'react'

const cartContext = createContext()

const Context = ({children}) => {
    return (
        <cartContext.Provider>
            {children}
        </cartContext.Provider>
    )
}

export default Context