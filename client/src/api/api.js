const host = import.meta.env.VITE_SERVER_API_URL;

const request = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('userData'));

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;

        if (user.email === 'admin@abv.bg') {
            options.headers['X-Admin'] = user.accessToken;
        }
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
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