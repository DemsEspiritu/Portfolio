import '../src/css/App.css'
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Education from './components/Education'
import Registerform from './components/Registerform'
import Square from './components/Square'
import Counter from './components/Counter'
import Pokemon from './components/Pokemon'
import Skills from './components/Skills'
export default function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Education />
      {/* <Registerform /> */}
      {/* <div className='grid grid-cols-3 gap-3'>
        <Square numberName="1" />
        <Square numberName="2" />
        <Square numberName="3" />
        <Square numberName="4" />
        <Square numberName="5" />
        <Square numberName="6" />
        <Square numberName="7" />
        <Square numberName="8" />
        <Square numberName="6" />
      </div> */}
      {/* <Counter /> */}
      {/* <Pokemon/> */}
      <Skills/>
    </>
  )
}