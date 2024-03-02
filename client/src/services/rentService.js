import { requestFactory } from "../api/api"

const baseUrl = '/data/rents';

const request = requestFactory();

const createRent = async (data) => {
    await request.post(baseUrl, data);
}

export {
    createRent
}