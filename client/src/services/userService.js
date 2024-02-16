import { requestFactory } from '../api/api'

const baseUrl = '/users';

const request = requestFactory();

const getUser = async () => {
    const result = await request.get(`${baseUrl}/me`);

    return result;
}

const getAll = async () => {
    const result = await request.get(`${baseUrl}/users`);
    
    return result;
}

export { getUser, getAll }
