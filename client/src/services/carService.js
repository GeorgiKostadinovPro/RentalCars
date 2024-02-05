import { requestFactory } from "../api/api"

const baseUrl = '/data/cars';

const request = requestFactory();

const getAll = async (skip = 0, take = 3) => {
    const query = new URLSearchParams({
        select: '_id,make,model,pricePerDay,maxPeople,luggageCapacity,doors,transmission,gallery',
        offset: skip,
        pageSize: take
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const getCarsCount = async () => {
    const result = await request.get(`${baseUrl}`);

    return result?.length;
}

export { getAll, getCarsCount }
