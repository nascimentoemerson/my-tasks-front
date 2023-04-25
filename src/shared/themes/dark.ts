import {createTheme} from '@mui/material'
import {blue,cyan} from '@mui/material/colors'

export const darkTheme = createTheme({
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
            paper: '#303134',
            default: '#202124' ,

        }
    }
})