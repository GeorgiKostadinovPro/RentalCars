const Path = {
    register: '/register',
    login: '/login',
    logout: '/logout',
    profile: '/profile',
    allUserCars: '/profile/myCars',
    favouriteCars: '/profile/favouriteCars',
    home: '/',
    cars: '/cars',
    carDetails: (carId) => {
        return carId ? `/cars/${carId}/details` : '/cars/:carId/details'
    },
    about: '/about',
    terms: '/terms',
    blog: '/blog',
    contact: '/contact',
    notFound: '*'
}

export { Path }