import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Search from './components/Search'
import Trending from './components/Trending'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
         <>
          <Search />
          <Trending />
         </> } />
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App