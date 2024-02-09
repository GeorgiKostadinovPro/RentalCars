import { requestFactory } from "../api/api"

const request = requestFactory();

const baseUrl = '/data/reviews';

const getAllByCarId = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `author=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export { getAllByCarId }