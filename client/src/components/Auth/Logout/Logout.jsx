import { useEffect } from "react"
import { Navigate } from "react-router-dom"

import { useAuthContext } from "../../../hooks/useAuthContext"
import { Path } from "../../../utilities/Path";

export const Logout = () => {
    const { logoutSubmitHandler } = useAuthContext();

    useEffect(() => {
        logoutSubmitHandler();
    }, []);

    return <Navigate to={Path.home} replace={true} />;
}