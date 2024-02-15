import { requestFactory } from "../api/api"

import { Constants } from "../utilities/constants"

const baseUrl = '/data/cars';

const request = requestFactory();

const getAll = async (
    filterCriteria, 
    skip = 0, 
    take = null
) => {

    const mainQuery = new URLSearchParams({
        select: '_id,make,model,year,_createdOn,pricePerDay,maxPeople,luggageCapacity,doors,transmission,gallery',
        offset: skip
    });

    if (take !== null) {
        mainQuery.set('pageSize', take);
    }

    if (filterCriteria?.searchInput) {
        mainQuery.set('where', `${filterCriteria.searchCriteria}="${filterCriteria.searchInput}"`);
    }

    let sortQuery;

    if (filterCriteria?.sortCriteria) {
        const sort = filterCriteria.sortOrder 
                    ? `${filterCriteria.sortCriteria} ${filterCriteria.sortOrder}`
                    : filterCriteria.sortCriteria;      
        
        sortQuery = '&sortBy=' + encodeURIComponent(sort);
    }

    const result = await request.get(`${baseUrl}?${mainQuery}${sortQuery ? sortQuery : ''}`);

    return result;
}

const getCarsCount = async (filterCriteria) => {

    const query = new URLSearchParams();

    if (filterCriteria.searchInput) {
        query.set('where', `${filterCriteria.searchCriteria}="${filterCriteria.searchInput}"`);
    }

    const result = await request.get(`${baseUrl}?${query}&count`);

    return result;
}

const getById = async (id) => {
    const query = new URLSearchParams({
        load: 'author=_ownerId:users'
    });

    const result = await request.get(`${baseUrl}/${id}?${query}`);
    
    return result;
};

const getByUserId = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

const deleteCar = async (carId) => {
    await request.delete(`${baseUrl}/${carId}`);
}

export { 
    getAll, 
    getCarsCount, 
    getById, 
    getByUserId, 
    deleteCar 
}
