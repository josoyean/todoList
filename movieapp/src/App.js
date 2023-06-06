import logo from './logo.svg';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import './App.css';
import { useState } from 'react';
import Detail from './routes/Detail';
import Moive from "./components/Moive"
import Home from "./routes/Home";
// function App() {
//   const [toDo,setToDo]=useState('');
//   const [toDos,setToDos]=useState([]);
//   const onChange = (e)=>{
//     setToDo(e.target.value)
//   }
//   const onSubmit=(e)=>{
//     e.preventDefault();
//     if(toDo === ''){
//       return;
//     }else{
//       setToDos((currentArray) => [toDo,...currentArray]);
//       setToDo('');
//     }
//     console.log(toDos)
//     console.log(toDo)
//   }
 
//   return (
//     <div>
//       <h1>My Todo ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//       <input value={toDo} onChange={onChange} type='text' placeholder='원하는 일정을 적으세요.'></input>
//       <button>추가하다</button>
//       </form>
//       <hr />
//       <ul>
//       {toDos.map((item,index)=>  (
//         <li key={index}>{item}</li>
//       ))}
//       </ul>
//     </div>
//   );
// }


function App() {
  return(
<Router>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Detail />}/>
    </Routes>
</Router>
  )
}
export default App;
