import { Navigate, Outlet } from 'react-router-dom'

import { useAuthContext } from '../hooks/useAuthContext'
import { Path } from '../utilities/Path'

export const AuthGuard = () => {
    const { isUserAuthenticated } = useAuthContext();

    if (!isUserAuthenticated) {
        return <Navigate to={Path.login} replace={true}/>
    }

    return <Outlet />;
}