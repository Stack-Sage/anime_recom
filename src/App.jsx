import react from 'react'
import Navbar from './components/navbar'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/footer'
import { Route,Routes } from 'react-router-dom'

const App = ()=>{
  


  return(
    <>
    <div className=' flex flex-col text-gray-200 bg-gradient-to-tr from-teal-950 via-black to-teal-950  w-screen text-center min-h-screen h-screen   ' >


     <div className=' fixed    '>

      <Navbar/>
     </div>
    
    <div className='pt-[100px] min-h-screen overflow-hidden '>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/contact' element = {<Contact/>}> </Route>
    <Route path='/about' element = {<About/>}> </Route>
    </Routes>

    </div>
      

      
    </div>
    <div className=''>
      <Footer/>
    </div>
    </>
  )
}

export default App