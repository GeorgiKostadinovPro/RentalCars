import { Routes, Route, useLocation } from 'react-router-dom'

import { Path } from './utilities/Path';

import { Header } from "./components/Common/Header/Header";
import { Footer } from "./components/Common/Footer/Footer";

import { Register } from './components/Auth/Register';
import { Login } from './components/Auth/Login';
import { Logout } from './components/Auth/Logout';
import { Profile } from './components/User/Profile';

import { Home } from "./components/Home/Home";
import { Cars } from './components/Cars/Cars';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Blog } from './components/Blog/Blog';
import { Terms } from './components/Terms/Terms';
import { AuthProvider } from './contexts/AuthContext';
import { NotFound } from './components/Errors/NotFound';

function App() {
  const location = useLocation();

  const pathsWithoutHeaderAndFooter = [Path.register, Path.login];
  const shouldRenderHeaderAndFooter = !pathsWithoutHeaderAndFooter
                                            .includes(location.pathname);

  return (
    <>
      <AuthProvider>
        {shouldRenderHeaderAndFooter && <Header />}

        <Routes>
          <Route path={Path.register} element={<Register />} />
          <Route path={Path.login} element={<Login />} />
          <Route path={Path.logout} element={<Logout />} />
          <Route path={Path.profile} element={<Profile />} />

          <Route path={Path.home} element={<Home />} />
          <Route path={Path.cars} element={<Cars />} />
          <Route path={Path.about} element={<About />} />
          <Route path={Path.blog} element={<Blog />} />
          <Route path={Path.terms} element={<Terms />} />
          <Route path={Path.contact} element={<Contact />} />

          <Route path={Path.notFound} element={<NotFound />} />
        </Routes>

        {shouldRenderHeaderAndFooter && <Footer />}
      </AuthProvider>
    </>
  );
}

export default App
