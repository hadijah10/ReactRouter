import { useState } from 'react'
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout.jsx'
import Faq from './pages/help/Faq.jsx'
import Contact from './pages/help/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import CareerLayout from './layouts/CareerLayout.jsx'
import Career, { careersLoader } from './pages/Career.jsx'
import CareerDetails, {careerDetailsLoader} from './pages/CareerDetails.jsx'
import CareerError from './pages/CareerError.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}>
      </Route>
      <Route path='help' element={<HelpLayout/>}>
        <Route  path='faq' element={<Faq/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='careers' element={<CareerLayout/>} errorElement={<CareerError/>}>
        <Route index element={<Career/>} loader={careersLoader}/>
        <Route path=':id' element={<CareerDetails/>} loader={careerDetailsLoader} />
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Route> 
  )
)
function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
