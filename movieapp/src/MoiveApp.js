import {BrowserRouter as Router ,Routes, Route,Link} from 'react-router-dom'
import React,{useState,useEffect} from "react";
import Detail from './routes/Detail';
import Moive from "./components/Moive"
import Home from "./routes/Home";
const MoiveApp=()=>{

return(
<Router>
    <Routes>
        <Route path="/" element={<Home />}/>
        {/* </Route> */}
    </Routes>
</Router>
 
)
}

export default MoiveApp;