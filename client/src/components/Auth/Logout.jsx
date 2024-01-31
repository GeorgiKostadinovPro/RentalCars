import { useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export const Logout = () => {
    const { logoutSubmitHandler } = useContext(AuthContext);

    useEffect(() => {
        logoutSubmitHandler();
    }, []);

    return null;
}