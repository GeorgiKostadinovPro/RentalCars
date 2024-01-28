import { Routes, Route } from 'react-router-dom'

import { Path } from './utilities/Path';

import { Header } from "./components/Common/Header/Header";
import { Footer } from "./components/Common/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Cars } from './components/Cars/Cars';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Blog } from './components/Blog/Blog';
import { Terms } from './components/Terms/Terms';

function App() {
  return (
    <>
      <Header />

      <Routes>  
        <Route path={Path.home} element={ <Home /> } />
        <Route path={Path.cars} element={ <Cars /> } />
        <Route path={Path.about} element={ <About/> } />
        <Route path={Path.blog} element={ <Blog /> } />
        <Route path={Path.terms} element={ <Terms/> } />
        <Route path={Path.contact} element={ <Contact /> } />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
