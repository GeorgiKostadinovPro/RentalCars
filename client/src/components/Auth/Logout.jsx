import { useEffect } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";

export const Logout = () => {
    const { logoutSubmitHandler } = useAuthContext();

    useEffect(() => {
        logoutSubmitHandler();
    }, []);

    return null;
}