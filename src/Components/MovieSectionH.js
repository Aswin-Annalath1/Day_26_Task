import React from 'react'
import { movieH } from '../Utils/ConstantsH'
import MovieCard from './MovieCard'

const MovieSectionH = () => {

  return (
    <div className="movieSection">
      {
       movieH.map((element)=>(
        <MovieCard {...element}/>
       ))
      }
    </div>
  )
}

export default MovieSectionH