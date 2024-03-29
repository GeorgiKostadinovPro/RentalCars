import { requestFactory } from "../api/api"

const baseUrl = '/data/rents';

const request = requestFactory();

const getById = async (rentId) => {
    const query = `load=${encodeURIComponent('car=carId:cars,author=_ownerId:users')}`;

    const result = await request.get(`${baseUrl}/${rentId}?${query}`);

    return result;
}

const checkIfRentIsPossible = async (carId, pickUpDate, returningDate) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`
    });

    const existingRentals = await request.get(`${baseUrl}?${query}`);

    const pickUpDateTime = new Date(pickUpDate);
    const returningDateTime = new Date(returningDate);

    const isOverlapping = existingRentals.some(rent => {
        const existingPickUpDateTime = new Date(rent.pickUpDateAndTime);
        const existingReturningDateTime = new Date(rent.returningDateAndTime);

        return (
            (pickUpDateTime < existingReturningDateTime && pickUpDateTime >= existingPickUpDateTime) ||
            (returningDateTime > existingPickUpDateTime && returningDateTime <= existingReturningDateTime) ||
            (pickUpDateTime <= existingPickUpDateTime && returningDateTime >= existingReturningDateTime)
        );
    });

    return !isOverlapping;
}

const createRent = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
}

export {
    getById,
    checkIfRentIsPossible,
    createRent
}