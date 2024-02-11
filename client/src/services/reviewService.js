import { requestFactory } from "../api/api"

const baseUrl = '/data/reviews';

const request = requestFactory();

const getAllByCarId = async (carId, skip, take) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `author=_ownerId:users`
    });

    if (skip != undefined && take !== undefined) {
        query.set('offset', skip);
        query.set('pageSize', take);
    }

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const createReview = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
}

export { 
    getAllByCarId,
    createReview
}