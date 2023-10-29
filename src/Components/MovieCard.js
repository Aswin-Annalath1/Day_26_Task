import React from 'react'
import { useState } from "react";

const MovieCard = ({name,poster,rating,summary}) => {

    const [show,setShow]=useState(false)
    const [btnText,setBtnText]=useState("🔽")

  return (
    <div>  
        <div className="movieContainer">
                    <img className="moviePoster" src={poster}  alt="" />
                    <div className="movieSpecs">
                        <h4 style={{fontWeight:"700",fontSize:"large"}}>{name}
                            <button style={{ backgroundColor: "rgb(53, 198, 246)"}} 
                            onClick={()=>{
                                setShow(!show)
                                btnText=="🔽"? setBtnText("🔼"):setBtnText("🔽")
                                }}>
                                    {btnText}</button>
                        </h4>

                        <h4 style={{color:rating>8? "green":"red"}}>⭐{rating}</h4>
                    </div> 
                    {show && <p className="movieSummary">{summary}</p>}
             
        </div>    
    </div>
  )
}

export default MovieCard