import { requestFactory } from "../api/api"

const baseUrl = '/data/favourites';

const request = requestFactory();

const getAllByUserId = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: 'car=carId:cars'
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const createFavourite = async (carId) => {
    const result = await request.post(baseUrl, { carId });

    return result;
}

const deleteFavourite = async (id) => {
    await request.delete(`${baseUrl}/${id}`);
}

const getFavourite = async (userId, carId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result.filter(f => f.carId === carId)[0];
}

export {
    getAllByUserId,
    createFavourite,
    deleteFavourite,
    getFavourite
}