import { Routes, Route } from 'react-router-dom'

import { Header } from "./components/Common/Header/Header";
import { Footer } from "./components/Common/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Terms } from './components/Terms/Terms';
import { Path } from './utilities/Path';

function App() {
  return (
    <>
      <Header />

      <Routes>  
        <Route path={Path.home} element={ <Home /> } />
        <Route path={Path.about} element={ <About/> } />
        <Route path={Path.terms} element={ <Terms/> } />
        <Route path={Path.contact} element={ <Contact /> } />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
