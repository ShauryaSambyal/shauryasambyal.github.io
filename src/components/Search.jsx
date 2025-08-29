import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [movieName, setMoviename] = useState('')
  const [movie, setMovie] = useState({})
  const apiKey = import.meta.env.VITE_API_KEY
  const movieData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
      setMovie(response.data.results[0])
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }
  const nameChange = (e) =>{
    setMoviename(e.target.value)
  }
  return (
    <>
      <div className='mt-10'>
          <form className='flex items-center justify-center gap-3'>
              <input onChange={nameChange} value={movieName} type="text" name="" className='bg-white px-4 py-3 w-100' placeholder='Search Movies...'/>
              <button onClick={(e)=>{
                e.preventDefault(),
                movieData();
                setIsOpen(true)
              }} className='bg-amber-500 h-13 px-7 py-3 rounded text-xl text-white font-bold cursor-pointer hover:bg-amber-700 ease duration-300'>Search</button>
          </form>
      </div>
      <div className={` mt-10 text-center transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100 translate-y-0 mt-2' : 'scale-95 opacity-0 translate-y-2 pointer-events-none'}`}>
        <h1 className='text-3xl text-white font-bold'>Search Results</h1>
        <div className='mt-5'>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className='py-0 px-120 w-full' alt="" />
          <h1 className='text-white py-5 px-0 text-2xl font-bold'>Movie: <p className='text-amber-400 mt-1'>{movie.original_title}</p>  </h1>
          <p className='text-center text-amber-400 leading-relaxed max-w-4xl mx-auto text-lg font-semibold'><li className='text-white font-bold text-2xl list-none'>Overview:</li> <br />{movie.overview}</p>
          <h2 className=' text-2xl mt-4 font-bold text-white'>Rating: <li className='text-amber-400 mt-1'>{movie.vote_average}</li> </h2>
          <h2 className='text-2xl font-bold text-white mb-10'>Upvotes: <p className='text-amber-400 mt-1'>{movie.vote_count}</p> </h2>

        </div>
      </div>
    </>
  )
}

export default Search

//https://image.tmdb.org/t/p/w300/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg