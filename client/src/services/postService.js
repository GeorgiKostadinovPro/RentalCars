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

const getRecent = async () => {
    const query = new URLSearchParams({
        select: '_id,title,_ownerId,_createdOn',
        load: 'author=_ownerId:users',
        offset: 0,
        pageSize: 3,
    });

    const sort = `sortBy=${encodeURIComponent('_createdOn desc')}`

    const result = await request.get(`${baseUrl}?${query}&${sort}`);

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
    getRecent,
    getById,
    deletePost 
}