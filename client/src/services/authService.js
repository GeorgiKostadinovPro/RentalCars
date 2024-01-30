import { requestFactory } from '../api/api'
import { clearUserInfo, setUserInfo } from '../utilities/auth';

const request = requestFactory();

const register = async (userData) => {
    const { _id, email, accessToken } = await request.post('/users/register', userData);

    setUserInfo({ _id, email, accessToken });
};

const login = async (userData) => {
    const { _id, email, accessToken} = await request.post('/users/login', userData);

    setUserInfo({ _id, email, accessToken });
}

const logout = async () => {
    await request.get('/users/logout');

    clearUserInfo();
}

export {
    register, login, logout
}