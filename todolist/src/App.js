import React,{useState} from 'react';
import TodoBoard from './components/TodoBoard';
// import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import './App.css';
// import TodoItem from './components/TodoItem';

function App() {
const [inputValue,setInputValue]=useState('');
const [todoList,setTodoList] = useState([]); //useState([]) 배열로 만듬
  function inputChange(e){
    setInputValue(e.target.value)
  }
  //input안에 내용 넣기

  function addItem(e){
    if(inputValue !== ''){
      setTodoList([...todoList,inputValue]);
      setInputValue('')//버튼 클릭시 화면에 보이는 input 초기화
    }
  }
  return (
    <main>
    
      <div className='input-list'>
      <input type='text' value={inputValue} onChange={inputChange}></input>
      <span className="item-add" onClick={addItem}>추가</span>
      </div>
      <TodoBoard todoList={todoList} key={todoList.length} setTodoList={setTodoList}/>
    </main>
  );
}

export default App;
