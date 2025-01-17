import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Doctors from "./pages/Doctors.jsx"
import Login from "./pages/Login.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import MyProfile from "./pages/MyProfile.jsx"
import MyApointments from "./pages/MyApointments.jsx"
import Appointment from "./pages/Apointment.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/my-appointment" element={<MyApointments/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
