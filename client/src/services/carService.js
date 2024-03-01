import { requestFactory } from "../api/api"

const baseUrl = '/data/cars';

const request = requestFactory();

const getAll = async (
    filterCriteria, 
    skip = 0, 
    take = null
) => {

    const mainQuery = new URLSearchParams({
        select: '_id,make,model,year,_createdOn,pricePerDay,maxPeople,luggageCapacity,doors,transmission,gallery',
    });

    if (take !== null) {
        mainQuery.set('offset', skip);
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

const createCar = async (data) => {
    await request.post(baseUrl, data);
}

const editCar = async (id, data) => {
    await request.put(`${baseUrl}/${id}`, data);
}

const deleteCar = async (carId) => {
    await request.delete(`${baseUrl}/${carId}`);
}

export { 
    getAll, 
    getCarsCount, 
    getById, 
    getByUserId, 
    createCar,
    editCar,
    deleteCar 
}
