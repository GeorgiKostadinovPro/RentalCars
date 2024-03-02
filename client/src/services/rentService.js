import { requestFactory } from "../api/api"

const baseUrl = '/data/rents';

const request = requestFactory();

const createRent = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
}

export {
    createRent
}