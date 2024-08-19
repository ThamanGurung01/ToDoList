import React,{useState,useContext,useEffect} from "react";
import { InputTaskContext } from "../App";
import { isClickedContext } from "../App";


function ToDoList(){
  // const DoLists=["Eat breakfast","Excercise","Shower"];
  const [Lists,setLists]=useState([]);
  const [newInputTasks,setInputLists]=useContext(InputTaskContext);
  const [isAddBtnClicked,setIsClicked]=useContext(isClickedContext);

  useEffect(()=>{
    if(isAddBtnClicked){
      if(newInputTasks!=""){
        AddTaskList();
      }
    }
  },[isAddBtnClicked]);

  const AddTaskList=()=>{
    setLists([...Lists,newInputTasks]);
    setInputLists("");
    setIsClicked(false);
  }

  return(
    <div className="ToDoList">
      <ul className="Lists">
      {Lists.map((element,index)=> <li key={index}>{element}</li> )}
      </ul>
    </div>
  );
}
export default ToDoList