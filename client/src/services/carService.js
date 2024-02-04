import { requestFactory } from "../api/api"

const baseUrl = '/data/cars';

const request = requestFactory();

const getAll = async () => {
    const query = new URLSearchParams({
        select: '_id,make,model,pricePerDay,maxPeople,luggageCapacity,doors,transmission,gallery'
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export { getAll }
