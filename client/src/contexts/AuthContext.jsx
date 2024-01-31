import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService'
import { getUserInfo } from '../utilities/auth';
import { Path } from '../utilities/Path';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(getUserInfo());

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

        setUser(null);

        navigate(Path.home);
    }

    const isUserAuthenticated = () => {
        return user !== null;
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
