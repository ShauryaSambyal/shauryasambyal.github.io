import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between w-full h-20 px-5 py-5'>
        <h1 className='text-4xl font-bold text-white'>React-ing to Movies.</h1>
        <div className='flex items-center gap-10 px-12 py-0'>
          <Link className='text-amber-400 text-2xl border-2 border-amber-500 rounded-4xl px-4 py-1 hover:bg-amber-500 hover:text-black ease duration-300 font-semibold' to='/'>Home</Link>
          <Link className='text-amber-400 text-2xl border-2 border-amber-500 rounded-4xl px-4 py-1 hover:bg-amber-500 hover:text-black ease duration-300 font-semibold' to='/about'>About</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar

// text-amber-500 text-2xl border-2 border-amber-500 rounded-4xl px-4 py-1 hover:bg-amber-500 hover:text-black transis ease duration-300 font-semibold