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

const deleteFavourite = async (id) => {
    await request.delete(`${baseUrl}/${id}`);
}

export {
    getAllByUserId,
    deleteFavourite
}