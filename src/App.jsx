import React,{createContext,useState} from 'react';
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';

export const InputTaskContext=createContext();
export const isClickedContext=createContext();

function App() {
const [InputList,setInputLists]=useState("");
const [isClicked,setIsClicked]=useState(false);

  return (
    <InputTaskContext.Provider value={[InputList,setInputLists]}>
      <isClickedContext.Provider value={[isClicked,setIsClicked]}>
          <div className="container">
      <ToDoInput/>
      <ToDoList/>
    </div>
    </isClickedContext.Provider>
    </InputTaskContext.Provider>
  )
}

export default App
