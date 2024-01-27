import { Routes, Route } from 'react-router-dom'

import { Footer } from "./components/Common/Footer";
import { Header } from "./components/Common/Header";
import { Home } from "./components/Home/Home";
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';

function App() {
  return (
    <>
      <Header />

      <Routes>  
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
