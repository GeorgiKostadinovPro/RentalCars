import { useState } from "react"

export const useAuthStorage = (initialValue) => {
    const [state, setState] = useState(() => {
        const user = localStorage.getItem('userData');

        if (user) {
            return JSON.parse(user);
        }

        return initialValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let valueToJSON;

        if (typeof value === 'function') {
            valueToJSON = JSON.stringify(value(state));
        } else {
            valueToJSON = JSON.stringify(value);
        }

        localStorage.setItem('userData', valueToJSON);
    };

    return [state, setPersistedState]
}