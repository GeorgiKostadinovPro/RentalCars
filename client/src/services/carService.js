import { requestFactory } from "../api/api"

import { Constants } from "../utilities/constants";

const baseUrl = '/data/cars';

const request = requestFactory();

const getAll = async (
    filterCriteria, 
    skip = 0, 
    take = Constants.pagination.pageSize
) => {
    const query = new URLSearchParams({
        select: '_id,make,model,pricePerDay,maxPeople,luggageCapacity,doors,transmission,gallery',
        offset: skip,
        pageSize: take
    });

    if (filterCriteria.searchInput) {
        query.set('where', `${filterCriteria.searchCriteria}="${filterCriteria.searchInput}"`);
    }

    // if (filterCriteria.sortCriteria) {
    //     const sort = filterCriteria.sortOrder 
    //                 ? `${filterCriteria.sortCriteria} ${filterCriteria.sortOrder}`
    //                 : filterCriteria.sortCriteria;

    //     query.set('sortBy', sort);
    // }

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const getCarsCount = async (searchCriteria) => {

    const query = new URLSearchParams({
        select: '_id'
    });


    const result = await request.get(`${baseUrl}?${query}`);

    return result?.length;
}

export { getAll, getCarsCount }
