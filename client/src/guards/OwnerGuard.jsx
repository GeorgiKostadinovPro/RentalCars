import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"

import { useAuthContext } from "../hooks/useAuthContext"

import * as carService from '../services/carService'

import { NotFound } from "../components/Errors/NotFound/NotFound"

export const OwnerGuard = () => {
    const { userId, isAdmin } = useAuthContext();

    const { carId } = useParams();

    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        const checkIsOwner = async () => {
            try {
                const car = await carService.getById(carId);

                if ((car && car._ownerId === userId)
                || (car && isAdmin)) {
                    setIsOwner(true);
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        checkIsOwner();
    }, [carId, userId]);

    if (!isOwner) {
        return <NotFound />;
    }

    return <Outlet />;
}