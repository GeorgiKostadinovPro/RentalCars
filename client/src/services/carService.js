import { requestFactory } from "../api/api"

import { searchUrlBuilder } from "../utilities/searchUrlBuilder";
import { Constants } from "../utilities/constants";

const baseUrl = '/data/cars';

const request = requestFactory();

const getAll = async (
    searchCriteria, 
    skip = 0, 
    take = Constants.pagination.pageSize
) => {

    const searchUrl = searchUrlBuilder(searchCriteria);
    
    const query = new URLSearchParams({
        select: '_id,make,model,pricePerDay,maxPeople,luggageCapacity,doors,transmission,gallery',
        offset: skip,
        pageSize: take
    });
    
    if (searchUrl) {
        query.append('where', searchUrl);
    }

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const getCarsCount = async (searchCriteria) => {
    const searchUrl = searchUrlBuilder(searchCriteria);

    const query = new URLSearchParams({
        select: '_id'
    });

    if (searchUrl) {
        query.append('where', searchUrl);
    }

    const result = await request.get(`${baseUrl}?${query}`);

    return result?.length;
}

export { getAll, getCarsCount }
