import React from 'react'
import Home from '../src/Home/Home'
import Courses from './courses/Courses'
import Contact from './components/Contact'
import {Route, Routes} from "react-router-dom"
import SignUp from './components/SignUp'
function App() {
  return (
   <>
   
    <div className='dark:bg-slate-900 dark:text-white'  >
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/course" element={<Courses/>}/>
     <Route path="/contact" element={<Contact/>}/>

     <Route path="/signup" element={<SignUp/>}/>

     </Routes>  
    </div>
   </>
  )
}

export default App
