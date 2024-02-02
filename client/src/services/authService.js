import { requestFactory } from '../api/api'

const request = requestFactory();

const register = async (userData) => {
    const result = await request.post('/users/register', userData);

    return result;
};

const login = async (userData) => {
    const result = await request.post('/users/login', userData);

    return result;
}

const logout = () => {
    request.get('/users/logout');
}

export {
    register, login, logout
}