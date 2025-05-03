import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [isDarkmode, setIsDarkmode] = useState(true)
    const toggleTheme = () => {
        setIsDarkmode((prevState) => !prevState)
    }
    const theme = isDarkmode ? "dark" : "light"
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [isDarkmode, theme])
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    )

}

