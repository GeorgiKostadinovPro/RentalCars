const Path = {
    register: '/register',
    login: '/login',
    logout: '/logout',
    profile: '/profile',
    allUserCars: '/profile/myCars',
    favouriteCars: '/profile/favouriteCars',
    ManageCars: '/profile/admin/cars',
    ManageUsers: '/profile/admin/users',
    ManagePosts: '/profile/admin/posts',
    home: '/',
    cars: '/cars',
    createCar: '/cars/create',
    editCar: (carId) => {
        return carId ? `/cars/edit/${carId}` : '/cars/edit/:carId'
    },
    carDetails: (carId) => {
        return carId ? `/cars/${carId}/details` : '/cars/:carId/details'
    },
    blog: '/blog',
    createPost: '/blog/posts/create',
    editPost: (postId) => {
        return postId ? `/blog/posts/edit/${postId}` : '/blog/posts/edit/:postId'
    },
    postDetails: (postId) => {
        return postId ? `/blog/posts/${postId}/details` : '/blog/posts/:postId/details'
    },
    rentDetails: (rentId) => {
        return rentId ? `/rents/${rentId}/details` : '/rents/:rentId/details'
    },
    about: '/about',
    terms: '/terms',
    contact: '/contact',
    notFound: '*'
}

export { Path }