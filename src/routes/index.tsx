import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppContext } from '../shared/contexts/ThemeContext'

export const AppRoutes = () => {

    const {toggleTheme} = useAppContext()

    return (
        <Routes>
            <Route path='/home' element={<Button variant='contained' color='primary' onClick={toggleTheme}>Mudar Tema</Button>} />

            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
    )
}
