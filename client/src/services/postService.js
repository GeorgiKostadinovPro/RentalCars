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

const getById = async (id) => {
    const query = new URLSearchParams({
        load: 'author=_ownerId:users'
    });

    const result = await request.get(`${baseUrl}/${id}?${query}`);

    return result;
}

const deletePost = async (id) => {
    await request.delete(`${baseUrl}/${id}`);
}

export { 
    getAll, 
    getById,
    deletePost 
}