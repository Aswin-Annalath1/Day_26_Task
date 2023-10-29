import React from 'react'
import { movieT } from '../Utils/ConstantsT'
import MovieCard from './MovieCard'

const MovieSectionT = () => {

  return (
    <div className="movieSection">
      {
       movieT.map((element)=>(
        <MovieCard {...element}/>
       ))
      }
    </div>
  )
}

export default MovieSectionT