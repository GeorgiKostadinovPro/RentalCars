import { useContext } from 'react'

import { CarsContext } from '../contexts/CarsContext'

export const useCarsContext = () => {
    const carsContext = useContext(CarsContext);

    return carsContext;
}