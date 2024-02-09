import { requestFactory } from "../api/api"

const baseUrl = '/data/reviews';

const request = requestFactory();

const getAllByCarId = async (carId, skip, take) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `author=_ownerId:users`,
        offset: skip,
        pageSize: take
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const getReviewsCountByCarId = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`
    });

    const result = request.get(`${baseUrl}?${query}&count`);

    return result;
}

const getReviewsRatingByCarId = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        select: 'rating'
    });

    const result = request.get(`${baseUrl}?${query}`);

    return result;
}

const createReview = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
}

export { 
    getAllByCarId,
    getReviewsCountByCarId, 
    getReviewsRatingByCarId,
    createReview
}