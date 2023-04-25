import { createContext, useCallback, useMemo, useState, useContext } from 'react'
import { Box, ThemeProvider } from "@mui/material"
import { lightTheme, darkTheme } from "./shared/themes"

interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppContext = () => {
    return useContext(ThemeContext)
}

interface IAppThemeProviderProps {
    children: React.ReactNode
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : ('light'))
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return lightTheme


        return darkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width={'100vw'} height={'100vh'} bgcolor={theme.pallete.background.default}>
                    {children}
                </Box>
            </ThemeProvider>

        </ThemeContext.Provider>
    )
}