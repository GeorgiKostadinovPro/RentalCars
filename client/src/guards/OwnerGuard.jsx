import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Navigate, Outlet, useParams } from "react-router-dom"

import { useAuthContext } from "../hooks/useAuthContext"

import * as carService from '../services/carService'

import { Path } from "../utilities/Path"

export const OwnerGuard = () => {
    const { userId } = useAuthContext();

    const { carId } = useParams();

    const isOwnerToCar = useRef(false);

    useLayoutEffect(() => {
        const checkIsOwner = async () => {
            try {
                const car = await carService.getById(carId);

                if (car && car._ownerId === userId) {
                    isOwnerToCar.current = true;
                    console.log(isOwnerToCar.current);
                } else {
                    isOwnerToCar.current = false;
                    console.log(isOwnerToCar.current);
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        checkIsOwner();
    }, [carId, userId]);

    if (!isOwnerToCar) {
        return <Navigate to={Path.notFound} replace={true} />;
    }

    return <Outlet />;
}