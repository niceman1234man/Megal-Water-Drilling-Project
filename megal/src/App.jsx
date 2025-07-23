import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './admin/Login.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './admin/Dashboard.jsx'
import EditAbout from './admin/EditAbout.jsx'
import Services from './admin/Services.jsx'
import Projects from './admin/Projects.jsx'
import ContactSettings from './admin/ContactSettings.jsx'
import Testimonials from './admin/Testimonials.jsx'
import Gallery from './admin/Gallery.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
    <Navbar />
    <div className="pt-20"> {/* Push content below fixed nav */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
         <Route path='login' element={<Login/>}/>
           <Route path='/admin/dashboard' element={<Dashboard/>}/>
           <Route path="/admin/edit-about" element={<EditAbout />} />
           <Route path="/admin/services" element={<Services />} />
           <Route path="/admin/projects" element={<Projects />} />
           <Route path="/admin/testimonials" element={<Testimonials />} />
           <Route path="/admin/contact" element={<ContactSettings />} />
           <Route path="/admin/gallery" element={<Gallery />} />
    </Routes>

      
      </div>
      <Footer/>
    </>
  )
}

export default App