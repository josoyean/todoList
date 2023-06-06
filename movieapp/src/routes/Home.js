import React,{useState,useEffect} from "react";
import Moive from "../components/Moive";
import Detail from "./Detail";
const Home =()=>{
       
const [loading,setLoading] = useState(true);
const [moives,setMoives] =useState([]);

const getMoives = async()=>{
const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
const json = await response.json();
setMoives(json.data.movies);
setLoading(false);
}

useEffect(()=>{
   getMoives();
},[])
console.log(moives)
return(
<div>
{loading ? <h1>Loading...</h1>:
(
   <div>
   {
       moives.map((moive)=>(
           <Moive key={moive.id} id={moive.id} medium_cover_image={moive.medium_cover_image} title={moive.title} summary={moive.summary} rating={moive.rating} genres={moive.genres}/>
       ))}

       </div>
)
}

</div>

)
}

export default Home;