import { Link } from 'react-router-dom';
import React,{useState,useEffect} from "react";
import propTypes  from "prop-types";
import Detail from '../routes/Detail';
const Moive=({id,medium_cover_image,title,summary,rating,genres})=>{
    return(
        <div key={id}>
        <img src={medium_cover_image}/>
        <h3>
            <Link to= {`/movie/${id}`}>
            {title}
            </Link>
        </h3>
        <p>{summary}</p>
        <span>{rating}</span>
        <ul>{
        genres.map(g => (
            <li key={g}>{g}</li>
        ))
        }
        </ul>   
    </div>
    )
}

Moive.propTypes={
    medium_cover_image:propTypes.string.isRequired,
    id:propTypes.number.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
}
export default Moive;