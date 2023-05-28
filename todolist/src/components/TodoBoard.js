// import React from "react";
import React,{useState} from 'react';
import TodoItem from "./TodoItem";
function  TodoBoard({todoList,setTodoList}) {
 
    return(
        <div>
        <h1>Todo List</h1>
        <div className="list-wrap">
        {todoList.map((item,index)=>
            <TodoItem item={item} key={index} index={index} todoList={todoList} setTodoList={setTodoList}/>
        )}
            </div>
    </div>
)
}
export default TodoBoard;
