import { requestFactory } from "../api/api"

const baseUrl = '/data/rents';

const request = requestFactory();

const getById = async (rentId) => {
    const result = await request.get(`${baseUrl}/${rentId}`);

    return result;
}

const createRent = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
}

export {
    getById,
    createRent
}