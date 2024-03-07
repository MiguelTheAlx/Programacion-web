import { useEffect, useState } from "react";
import React from "react"
import NewTask from "./newTask";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css'
import { List } from "reactstrap";

const TodoList = () =>{
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() =>{
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    window.addEventListener('beforeunload', function() {
        document.body.classList.add('reload');
      }); 
    
    const deleteTask = (index) =>{
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () =>{
        setModal(!modal);
    }

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)

        localStorage.setItem("taskList", JSON.stringify(tempList))

        setTaskList(taskList)
        setModal(false)
    }

    const updateListArray = (obj, index) =>{
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    return (
        <>
            <div className="header text-center">
                <h2>To do List</h2>
                {/* boton para activar el modal*/}
                <button className="btn btn-primary mt-4" onClick={() => setModal(true)}>new task</button>
            </div>


            <div className="task-container">
                
                {taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask = {deleteTask} updateListArray={updateListArray} />)}
            </div>
            <NewTask toggle = {toggle} modal = {modal} save={saveTask} />
        </>
    )
}

export default TodoList