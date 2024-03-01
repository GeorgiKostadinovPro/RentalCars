import { requestFactory } from '../api/api'

const baseUrl = '/data/comments';

const request = requestFactory();

const getAllByPostId = async (postId, skip, take) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`,
        load: `author=_ownerId:users`,
        offset: skip,
        pageSize: take
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const getCountByPostId = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`
    });

    const result = await request.get(`${baseUrl}?${query}&count`);

    return result;
}

const createComment = async (data) => {
    await request.post(baseUrl, data);
}

export {
    getAllByPostId,
    getCountByPostId,
    createComment
}