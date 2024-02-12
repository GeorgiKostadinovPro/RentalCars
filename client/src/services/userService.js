import { requestFactory } from '../api/api'

const baseUrl = '/users';

const request = requestFactory();

const getUser = async () => {
    const result = await request.get(`${baseUrl}/me`);

    return result;
}

export { getUser }
