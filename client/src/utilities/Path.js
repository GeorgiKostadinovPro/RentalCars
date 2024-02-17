const Path = {
    register: '/register',
    login: '/login',
    logout: '/logout',
    profile: '/profile',
    allUserCars: '/profile/myCars',
    favouriteCars: '/profile/favouriteCars',
    allCars: '/profile/admin/cars',
    allUsers: '/profile/admin/users',
    allPosts: '/profile/admin/posts',
    home: '/',
    createCar: '/cars/create',
    cars: '/cars',
    carDetails: (carId) => {
        return carId ? `/cars/${carId}/details` : '/cars/:carId/details'
    },
    about: '/about',
    terms: '/terms',
    blog: '/blog',
    postDetails: (postId) => {
        return postId ? `/blog/posts/${postId}/details` : '/blog/posts/:postId/details'
    },
    contact: '/contact',
    notFound: '*'
}

export { Path }