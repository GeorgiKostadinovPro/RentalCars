import { requestFactory } from "../api/api"

const baseUrl = '/data/posts';

const request = requestFactory();

const getAll = async () => {
    const query = new URLSearchParams({
        select: '_id,title,_createdOn'
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export { getAll }