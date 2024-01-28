import { Routes, Route, useLocation } from 'react-router-dom'

import { Path } from './utilities/Path';

import { Header } from "./components/Common/Header/Header";
import { Footer } from "./components/Common/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Cars } from './components/Cars/Cars';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Blog } from './components/Blog/Blog';
import { Terms } from './components/Terms/Terms';
import { PostDetails } from './components/Blog/Post/PostDetails';
import { Login } from './components/Authentication/Login';
import { Register } from './components/Authentication/Register';

function App() {
  const location = useLocation();

  const pathsWithoutHeaderAndFooter = [Path.register, Path.login];
  const shouldRenderHeaderAndFooter = !pathsWithoutHeaderAndFooter
                                            .includes(location.pathname);

  return (
    <>
      {shouldRenderHeaderAndFooter && <Header />}

      <Routes>  
        <Route path={Path.login} element={ <Login /> } />
        <Route path={Path.register} element={ <Register />} />

        <Route path={Path.home} element={ <Home /> } />
        <Route path={Path.cars} element={ <Cars /> } />
        <Route path={Path.about} element={ <About/> } />
        <Route path={Path.blog} element={ <Blog /> } />
        <Route path={Path.terms} element={ <Terms/> } />
        <Route path={Path.contact} element={ <Contact /> } />
        <Route path={Path.postDetails} element={ <PostDetails/> } />
      </Routes>

      {shouldRenderHeaderAndFooter && <Footer />}
    </>
  )
}

export default App
