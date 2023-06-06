import React,{useState} from "react";

function TodoItem({item,todoList,index,setTodoList}) {
    function itemDelect(){
        const list = todoList.filter((_item,_index)=>  _index != index);
         setTodoList(list);
    }

    return(
        <div className="todo-item"><em>{item}</em>
        <span className="item-delect" onClick={itemDelect}>삭제</span>
        </div>
    )
}

export default TodoItem;