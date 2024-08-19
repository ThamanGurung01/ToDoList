import React,{useState,useContext} from "react";
import { InputTaskContext } from "../App";
import { isClickedContext } from "../App";

function ToDoInput(){
  const [InputList,setInputLists]=useContext(InputTaskContext);
  const [isClicked,setIsClicked]=useContext(isClickedContext);
const InputHandler=(e)=>{
  setInputLists(e.value);
}
const AddTask=()=>{
  if(InputList!=""){
    setIsClicked(true);
  }
}
return (
  <div className="ToDoInput">
      <h1>ToDoInput</h1>
    <input type="text" placeholder="New Todo" value={InputList} onChange={(e)=>InputHandler(e.target)}/>
    <button type="button" onClick={AddTask}>Add New Task</button>
  </div>
);
}
export default ToDoInput