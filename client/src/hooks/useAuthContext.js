import { useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext'

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    return authContext;
}
