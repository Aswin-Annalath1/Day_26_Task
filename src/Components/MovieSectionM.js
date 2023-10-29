import React from 'react'
import { movieM } from '../Utils/ConstantsM'
import MovieCard from './MovieCard'

const MovieSectionM = () => {

  return (
    <div className="movieSection">
      {
       movieM.map((element)=>(
        <MovieCard {...element}/>
       ))
      }
    </div>
  )
}

export default MovieSectionM