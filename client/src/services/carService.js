import { requestFactory } from "../api/api"

const baseUrl = '/data/cars';

const request = requestFactory();

const getOffers = async () => {
    const query = new URLSearchParams({
        select: '_id,make,model,pricePerDay,description,gallery'
    });

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    return result;
}  

export { getOffers }
