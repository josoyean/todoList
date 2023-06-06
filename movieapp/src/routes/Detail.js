import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const Detail = ()=>{
    const {id} = useParams();
    const [moiveItem,setMoiveItem] = useState([]);
    // console.log(id);
const  getMoivesList=async()=>{
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
const json = await response.json();
setMoiveItem(json.data.movie);
}
    useEffect(()=>{
        getMoivesList();
    },[])

    console.log(moiveItem);
    return(
        <h1>Detail</h1>
    )
}

export default Detail;