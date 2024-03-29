import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { EditCar } from "./EditCar"

jest.mock("../../../services/cloudinaryService", () => ({
  uploadFiles: jest.fn().mockResolvedValue([
    { url: "mockUrl1", publicId: "mockPublicId1" },
    { url: "mockUrl2", publicId: "mockPublicId2" }
  ])
}));

jest.mock('../../../services/carService', () => ({
    getById: jest.fn().mockResolvedValue({
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
        horsePower: 450,
        fuelType: "Petrol",
        mileAge: 16000,
        description: "Experience the power and style of the Ford Mustang, a classic coupe with a thrilling performance.",
        _createdOn: 1614260681375,
        location: "Sofia, Bulgaria",
        gallery: [
            "ford1.png",
            "ford2.png"
        ],
        author: {
            username: 'User1',
            email: 'user1@abv.bg',
            profilePictureUrl: 'user1.png'
        }
    }),
    editCar: jest.fn()
}));

describe('EditCar Component', () => {
    let dom;

    beforeEach(() => {
      act(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <EditCar />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('renders the form with pre-populated data upon inital render successfully', async () => {
        await waitFor(() => {
            expect(screen.getByDisplayValue('Ford')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Mustang')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Coupe')).toBeInTheDocument();
            expect(screen.getByDisplayValue('2022')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Automatic')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Petrol')).toBeInTheDocument();
        });
    });

    it("should submit form with new valid data", async () => {
      fireEvent.change(dom.container.querySelector('input[name="make"]'), { target: { value: 'Toyota' } });
      fireEvent.change(dom.container.querySelector('input[name="model"]'), { target: { value: 'Corolla' } });
      fireEvent.change(dom.container.querySelector('input[name="year"]'), { target: { value: '2020' } });
      fireEvent.change(dom.container.querySelector('select[name="type"]'), { target: { value: 'Sedan' } });
      fireEvent.change(dom.container.querySelector('input[name="mileAge"]'), { target: { value: '50000' } });
      fireEvent.change(dom.container.querySelector('select[name="transmission"]'), { target: { value: 'Automatic' } });
      fireEvent.change(dom.container.querySelector('select[name="fuelType"]'), { target: { value: 'Petrol' } });
      fireEvent.change(dom.container.querySelector('input[name="horsePower"]'), { target: { value: '150' } });
      fireEvent.change(dom.container.querySelector('input[name="doors"]'), { target: { value: '4' } });
      fireEvent.change(dom.container.querySelector('input[name="luggageCapacity"]'), { target: { value: '3' } });
      fireEvent.change(dom.container.querySelector('input[name="maxPeople"]'), { target: { value: '5' } });
      fireEvent.change(dom.container.querySelector('input[name="location"]'), { target: { value: 'Sofia, Bulgaria' } });
      fireEvent.change(dom.container.querySelector('input[name="pricePerDay"]'), { target: { value: '50' } });
      fireEvent.change(dom.container.querySelector('textarea[name="description"]'), { target: { value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' } });

      const files = [
        new File(["image1"], "image1.png", { type: "image/png" }),
        new File(["image2"], "image2.png", { type: "image/png" }),
      ];

      const galleryInput = dom.container.querySelector('input[name="galleryFiles"]');

      await waitFor(() =>
        fireEvent.change(galleryInput, {
          target: { files: files }
        })
      );

      const editButton = dom.container.querySelector(".edit-btn");

      act(() => {
        fireEvent.click(editButton);
      });

      expect(galleryInput.files.length).toBe(2);
    });

    it("does NOT submit the form with invalid data", async () => {
        fireEvent.change(dom.container.querySelector('input[name="make"]'), { target: { value: 'Toyota' } });
        fireEvent.change(dom.container.querySelector('input[name="model"]'), { target: { value: 'Corolla' } });
        fireEvent.change(dom.container.querySelector('input[name="year"]'), { target: { value: '1999' } });
        fireEvent.change(dom.container.querySelector('input[name="mileAge"]'), { target: { value: '400000' } });
        fireEvent.change(dom.container.querySelector('input[name="horsePower"]'), { target: { value: '50' } });
        fireEvent.change(dom.container.querySelector('input[name="pricePerDay"]'), { target: { value: '9' } });
  
        const editButton = dom.container.querySelector(".edit-btn");
  
        act(() => {
          fireEvent.click(editButton);
        });

        await waitFor(() => {
            expect(screen.getByText("The year must be at least 2000!")).toBeInTheDocument();
            expect(screen.getByText("The mileage cannot be above 300 000 km!")).toBeInTheDocument();
            expect(screen.getByText("The horsepower must be at least 75 hp!")).toBeInTheDocument();
            expect(screen.getByText("The price must be at least $10!")).toBeInTheDocument();
        });
    });
});
