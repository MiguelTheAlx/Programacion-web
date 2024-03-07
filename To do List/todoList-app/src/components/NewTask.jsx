import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const NewTask = ({modal, toggle, save}) =>{
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target
        //Condicional en forma de ternaria para cada caso.
        name === "taskName" ? setTaskName(value) : setDescription(value)
    }

    const handleSave = () =>{
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
    }

    return(
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create new Task</ModalHeader>
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
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
      </Modal>
    );
};

export default NewTask;