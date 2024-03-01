import { requestFactory } from '../api/api'

const baseUrl = '/data/comments';

const request = requestFactory();

const getCountByPostId = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`
    });

    const result = await request.get(`${baseUrl}?${query}&count`);

    return result;
}

export {
    getCountByPostId
}