import React, { useState } from 'react';
import EditTask from './EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    

    const [modal, setModal]= useState(false); 

    const colors = [
        {
            primaryColor: "#5d93b1",
            secondaryColor: "#edfcfe"
        },
        
        {
            primaryColor: "#f9d288",
            secondaryColor: "#fefaf1"
        },
        
        {
            primaryColor: "#5dc250",
            secondaryColor: "#f2faf1"
        },
        
        {
            primaryColor: "#f48687",
            secondaryColor: "#fdf1f1"
        },
        
        {
            primaryColor: "#b964f7",
            secondaryColor: "#f3f0fd"
        }
    ]

    const handleDelete = () =>{
        deleteTask(index)
    }


    const toggle = ()=>{
        setModal(!modal)
    }

    const updateTask = (obj)=>{
        updateListArray(obj, index)
    }
    
    console.log(`Hola, mundo! ${colors[index%5].primaryColor}`);


    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className="task-holder">
                {/**Titulo de la tarea */}
                <span className='card-header text-truncate' style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name} </span>
                {/**Descripcion de dicha tarea */}
                <p>{taskObj.Description} </p>

                <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                    {/**Botones de editar y borrar */}
                    <i className="bx bxs-edit " style={{"color": colors[index%5].primaryColor, "cursor" : "pointer"} } onClick={() => setModal(true)}> </i>
                    

                    <i className="bx bxs-trash bx-flashin" style={{"color": colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handleDelete}></i>
                </div>
            </div>

        <EditTask modal = {modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>

        </div>
    );
};

export default Card;