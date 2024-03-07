import React, {useState, useEffect} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTask = ({modal, toggle, updateTask, taskObj}) =>{
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target
        //Condicional en forma de ternaria para cada caso.
        name === "taskName" ? setTaskName(value) : setDescription(value)
    }


    const handleUpdate = (e) =>{
        e.preventDefault();
        let tempObj = {}
        tempObj["Name"] = taskName
        tempObj["Description"] = description
        updateTask(tempObj)
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    return(
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Task Name</label>
                            <input type="text" name="taskName" id="" className="form-control" value={taskName} onChange = {handleChange}/>
                            
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="">Descripcion</label>
                            <textarea name="description"  rows="5" className="form-control" value = {description} onChange = {handleChange}></textarea>
                            
                        </div>
                    </form>
                </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;