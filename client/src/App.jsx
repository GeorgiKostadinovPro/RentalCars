import { Routes, Route, useLocation } from 'react-router-dom'

import { Path } from './utilities/Path'

import { Header } from "./components/Common/Header/Header"
import { Footer } from "./components/Common/Footer/Footer"

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import { AuthProvider } from './contexts/AuthContext'

import { Register } from './components/Auth/Register'
import { Login } from './components/Auth/Login'
import { Logout } from './components/Auth/Logout'
import { Profile } from './components/Profile/Profile'

import { Home } from "./components/Home/Home"
import { Cars } from './components/Cars/Cars'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'
import { Blog } from './components/Blog/Blog'
import { Terms } from './components/Terms/Terms'
import { NotFound } from './components/Errors/NotFound'
import { CreateCar } from './components/Cars/CreateCar/CreateCar'
import { EditCar } from './components/Cars/EditCar/EditCar'
import { CarDetails } from './components/Cars/CarDetails/CarDetails'
import { PostDetails } from './components/Blog/PostDetails/PostDetails'
import { CreatePost } from './components/Blog/CreatePost/CreatePost'
import { EditPost } from './components/Blog/EditPost/EditPost'
import { RentDetails } from './components/Rents/RentDetails/RentDetails'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const location = useLocation();

  const pathsWithoutHeaderAndFooter = [Path.register, Path.login];
  const shouldRenderHeaderAndFooter = !pathsWithoutHeaderAndFooter
                                            .includes(location.pathname);

  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          {shouldRenderHeaderAndFooter && <Header />}

          <Routes>
            <Route path={Path.register} element={<Register />} />
            <Route path={Path.login} element={<Login />} />
            <Route path={Path.logout} element={<Logout />} />
            <Route path={Path.profile} element={<Profile />} />

            <Route path={Path.home} element={<Home />} />

            <Route path={Path.cars} element={<Cars />} />
            <Route path={Path.createCar} element={<CreateCar />} />
            <Route path={Path.editCar()} element={<EditCar />} />
            <Route path={Path.carDetails()} element={<CarDetails />} />

            <Route path={Path.rentDetails()} element={<RentDetails />} />

            <Route path={Path.about} element={<About />} />

            <Route path={Path.blog} element={<Blog />} />
            <Route path={Path.createPost} element={<CreatePost />} />
            <Route path={Path.editPost()} element={<EditPost />} />
            <Route path={Path.postDetails()} element={<PostDetails />} />

            <Route path={Path.terms} element={<Terms />} />
            <Route path={Path.contact} element={<Contact />} />

            <Route path={Path.allUserCars} element={<Profile />} />
            <Route path={Path.favouriteCars} element={<Profile />} />
            <Route path={Path.allUsers} element={<Profile />} />
            <Route path={Path.allCars} element={<Profile />} />
            <Route path={Path.allPosts} element={<Profile />} />

            <Route path={Path.notFound} element={<NotFound />} />
          </Routes>

          {shouldRenderHeaderAndFooter && <Footer />}
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App
