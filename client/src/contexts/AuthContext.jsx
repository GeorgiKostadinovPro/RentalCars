import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService'
import { Path } from '../utilities/Path';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const registerSubmitHandler = async (data) => {
        const result = await authService.register(data);

        setUser(result);

        localStorage.setItem('userData', JSON.stringify(result));
    
        navigate(Path.home);
    };

    const loginSubmitHandler = async (data) => {
        const result = await authService.login(data);
    
        setUser(result);

        localStorage.setItem('userData', JSON.stringify(result));

        navigate(Path.home);
    };

    const logoutSubmitHandler = () => {
        authService.logout();

        setUser({});

        localStorage.removeItem('userData');

        navigate(Path.home);
    }

    const isUserAuthenticated = () => {
        return user.accessToken ? true : false;
    };

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutSubmitHandler,
        isUserAuthenticated
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}
