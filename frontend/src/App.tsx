
import '../src/css/App.css'
import Education from './components/Education'
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Project from './components/Project'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      <Navbar />
      <Profile />
      <Education />
      <Skills />
      <Project />
      <Footer/>
    </>
  )
}


