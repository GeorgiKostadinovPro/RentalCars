import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

import * as authService from '../services/authService'

import { useAuthStorage } from '../hooks/useAuthStorage'
import { Path } from '../utilities/Path'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useAuthStorage({});

    const registerSubmitHandler = async (data) => {
        const result = await authService.register(data);

        setUser(result);
    
        navigate(Path.home);
    };

    const loginSubmitHandler = async (data) => {
        const result = await authService.login(data);
    
        setUser(result);

        navigate(Path.home);
    };

    const logoutSubmitHandler = () => {
        authService.logout();

        setUser({});

        localStorage.removeItem('userData');
    }
    
    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutSubmitHandler,
        isUserAuthenticated: user.accessToken ? true : false,
        userId: user._id,
        email: user.email,
        username: user.username,
        isAdmin: user.email === 'admin@abv.bg'
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}
