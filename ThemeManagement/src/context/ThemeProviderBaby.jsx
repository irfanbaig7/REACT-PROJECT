import { Children, createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()

export const ThemeProviderBaby = ({children}) => {

    // pass the data
    const [dark, setDark] = useState(false)

    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}