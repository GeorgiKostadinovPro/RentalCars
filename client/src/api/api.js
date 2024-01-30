import { clearUserInfo } from "../utilities/auth";

const host = 'http://localhost:3030';

const request = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = getUserInfo();

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status === 204) {
            return response;
        }

        const result = response.json();

        if (!response.ok) {
            if (response.status === 403) {
                clearUserInfo();
            }

            throw new Error(result.message);
        }

        return result;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const requestFactory = () => {
    return {
        get: request.bind(null, 'GET'),
        post: request.bind(null, 'POST'),
        put: request.bind(null, 'PUT'),
        delete: request.bind(null, 'DELETE')
    }
}