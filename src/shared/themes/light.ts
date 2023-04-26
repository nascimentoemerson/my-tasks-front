import {createTheme} from '@mui/material'
import {blue,cyan} from '@mui/material/colors'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: blue[700],
            dark: blue[800],
            light: blue[500] ,
            contrastText: '#fffff',
        },
        secondary: {
            main: cyan[500],
            dark: blue[400],
            light: blue[300] ,
            contrastText: '#fffff',
        },

        background: {
            default: '#ffffff' ,
            paper: '#f7f6f3',

        }
    }
})