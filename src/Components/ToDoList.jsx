import React,{useState,useContext,useEffect} from "react";
import { InputTaskContext } from "../App";
import { isClickedContext } from "../App";
import DeleteImage from '../assets/delete.png'
function ToDoList(){
  // const DoLists=[{task:"Eat breakfast",isChecked:false},{task:"Excercise",isChecked:false},{task:"Shower",isChecked:false}];

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
    setLists([...Lists,{task:newInputTasks,isChecked:false}]);
    setInputLists("");
    setIsClicked(false);
  }

  const FinishedTaskHandler=(index)=>{
    const updatedList=Lists.map((el,i)=> index!=i?el: {task:el.task,isChecked:!el.isChecked})
      setLists(updatedList);
    // console.log(updatedList);
  }
  const deleteTask=(index)=>{
    const updatedList=Lists.filter((_,i)=>index!=i);
    setLists(updatedList);
  }
  return(
    <div className="ToDoList">
      <h1>ToDoLists</h1>
      <ul className="Lists" style={{paddingBottom:`${Lists.length>0?"1rem":""}`}}>
      {Lists.map((element,index)=> <li style={{textDecoration: `${element.isChecked?"line-through":""}`}} key={index}><div><input type="checkbox" value={element.task} onClick={()=>FinishedTaskHandler(index)} /><span>{element.task}</span></div><img src={DeleteImage} draggable={false} onClick={()=>deleteTask(index)}/></li> )}
      </ul>
    </div>
  );
}
export default ToDoList