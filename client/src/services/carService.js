import { requestFactory } from "../api/api"

import { Constants } from "../utilities/constants"

const baseUrl = '/data/cars';

const request = requestFactory();

const getAll = async (
    filterCriteria, 
    skip = 0, 
    take = Constants.pagination.pageSize
) => {
    const mainQuery = new URLSearchParams({
        select: '_id,make,model,pricePerDay,maxPeople,luggageCapacity,doors,transmission,gallery',
        offset: skip,
        pageSize: take
    });

    if (filterCriteria.searchInput) {
        mainQuery.set('where', `${filterCriteria.searchCriteria}="${filterCriteria.searchInput}"`);
    }

    let sortQuery;

    if (filterCriteria.sortCriteria) {
        const sort = filterCriteria.sortOrder 
                    ? `${filterCriteria.sortCriteria} ${filterCriteria.sortOrder}`
                    : filterCriteria.sortCriteria;      
        
        sortQuery = '&sortBy=' + encodeURIComponent(sort);
    }

    const result = await request.get(`${baseUrl}?${mainQuery}${sortQuery ? sortQuery : ''}`);

    return result;
}

const getCarsCount = async (filterCriteria) => {

    const query = new URLSearchParams({
        select: '_id',
    });

    if (filterCriteria.searchInput) {
        query.set('where', `${filterCriteria.searchCriteria}="${filterCriteria.searchInput}"`);
    }

    const result = await request.get(`${baseUrl}?${query}`);

    return result?.length;
}

const getById = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`);
    
    return result;
};

export { getAll, getCarsCount, getById }
