import React from 'react'
import { movieA } from '../Utils/ConstantsA'
import MovieCard from './MovieCard'

const MovieSection = () => {

  return (
    <div className="movieSection">
      {
       movieA.map((element)=>(
        <MovieCard {...element}/>
       ))
      }
    </div>
  )
}

export default MovieSection