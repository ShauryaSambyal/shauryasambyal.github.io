import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Trending = () => {
  const [trend, setTrend] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY
  
  const trendingData = async () => {
    if (!apiKey) {
      setError('API key is missing')
      setLoading(false)
      return
    }
    
    try {
      setLoading(true)
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      
      setTrend(response.data.results)
      setError(null)
    } catch (error) {
      console.error('Error Retrieving Data:', error)
      if (error.response?.status === 401) {
        setError('Invalid API key. Please check your TMDB API key.')
      } else {
        setError('Failed to fetch data')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    trendingData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="w-screen h-screen bg-transparent px-18 py-0 border-t-1 border-t-amber-50">
      <h1 className='text-center text-4xl text-white drop-shadow-lg font-bold mt-3 underline'>Trending Movies Right Now</h1>
      {trend.map((elem, idx) => (
        <div key={elem.id} className="w-60 h-80 bg-amber-100 rounded-3xl inline-block align-top mx-5 my-10 px-15 py-10">
          <img 
            className="w-35 h-35 object-cover rounded-2xl hover:scale-200 transition-all duration-300" 
            src={`https://image.tmdb.org/t/p/w300${elem.poster_path}`} 
            alt={elem.title || elem.original_title} 
          />
          <h1 className='p-2 text-sm text-cyan-800 text-center'>{elem.original_title}</h1>
          <p className=' text-center text-amber-800 font-bold'>Rating: {elem.vote_average}</p>
        </div>
      ))}
    </div>
  )
}

export default Trending