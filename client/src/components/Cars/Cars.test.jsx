import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import { Cars } from "./Cars"

jest.mock('../Filter/Filter', () => ({
    Filter: () => {
        return <mock-filter data-testid='mock-filter' />
    }
}));

jest.mock('../../hooks/useCarsContext', () => ({
    useCarsContext: () => ({
        cars: [
            {
                _id: '1',
                make: "Ford",
                model: "Mustang",
                type: "Coupe",
                year: 2022,
                pricePerDay: 60,
                transmission: "Automatic",
                doors: 2,
                luggageCapacity: 2,
                maxPeople: 4,
                _createdOn: 1614260681375,
                gallery: [
                    "ford1.png",
                    "ford2.png"
                ]
            },
            {
                _id: '2',
                make: "Toyota",
                model: "Corolla",
                type: "Coupe",
                year: 2022,
                pricePerDay: 60,
                transmission: "Manual",
                doors: 2,
                luggageCapacity: 2,
                maxPeople: 4,
                _createdOn: 1614260681375,
                gallery: [
                    "toyota1.png",
                    "toyota2.png"
                ]
            },
            {
                _id: '3',
                make: "Volkswaggen",
                model: "Golf",
                type: "Coupe",
                year: 2022,
                pricePerDay: 60,
                transmission: "Automatic",
                doors: 2,
                luggageCapacity: 2,
                maxPeople: 4,
                _createdOn: 1614260681375,
                gallery: [
                    "golf1.png",
                    "golf2.png"
                ]
            }
        ],
        getAllCars: jest.fn(),
        getTotalSize: jest.fn().mockResolvedValue(3)  
    })
}));

describe('Cars Component', () => {
    let dom;

    beforeEach(() => {
      act(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <Cars />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('should render without crashing', () => {
        expect(screen.getByText('Cars for rent')).toBeInTheDocument();
        expect(screen.getByText('Review the wide range collection of cars')).toBeInTheDocument();
    });

    it('should render cars', () => {
        const carElements = dom.container.querySelectorAll('.cars .service-item');
        expect(carElements.length).toBe(3);
    });

    it('displays pagination', async () => {
        const pageButtons = screen.getAllByTestId('change-page');
        expect(pageButtons.length).toBe(1);
    });

    it('should render filter component', () => {
        const filterElement = screen.getByTestId('mock-filter');
        expect(filterElement).toBeInTheDocument();
    });
});
